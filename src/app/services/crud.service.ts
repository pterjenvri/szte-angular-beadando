import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observation} from "../model/Observation";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private afs: AngularFirestore) { }

  get(collectionName:string) {
    const meds: Observation[] = [];
    this.afs
      .collection(collectionName)
      .ref
      .get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const m: Observation = doc.data() as Observation;
        interface Timestamp {
          seconds: number;
          nanoseconds: number;
        }
        if (m.issued !== undefined) {
          const timestamp: Timestamp = (m.issued as unknown) as Timestamp;
          m.issued = new Date(timestamp.seconds * 1000);
          console.log(m.issued);
        }
        meds.push(m);
      });
    });
    // console.log(meds);
    return meds;
  }

  async create(collectionName: string, data: Observation, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  update(collectionName: string, id: string, data: Observation) {
    return this.afs.collection(collectionName).doc(id).update(data);
  }

  delete(collectionName: string, id: string, data: Observation) {
    return this.afs.collection(collectionName).doc(id).delete();
  }

  getById(collectionName: string, id: string) {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }

}
