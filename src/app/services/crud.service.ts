import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Observation} from "../shared/models/Observation";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private afs: AngularFirestore) { }

  get(collectionName:string) {
    const observations: Observation[] = [];
    this.afs
      .collection(collectionName)
      .ref
      .get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const observation: Observation = doc.data() as Observation;
        interface Timestamp {
          seconds: number;
          nanoseconds: number;
        }
        if (observation.issued !== undefined) {
          const timestamp: Timestamp = (observation.issued as unknown) as Timestamp;
          observation.issued = new Date(timestamp.seconds * 1000);
        }
        observations.push(observation);
      });
    });
    return observations;
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

  delete(collectionName: string, id: string) {
    return this.afs.collection(collectionName).doc(id).delete();
  }

  getById(collectionName: string, id: string) {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }

}
