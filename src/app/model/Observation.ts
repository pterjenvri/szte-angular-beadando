import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

export interface Observation {
  id ?: string;
  category ?: string;
  issued ?: Date;
  performer ?: string;
  systolicmmHgValue ?: number;
  diastolicmmHgValue ?: number;
  note ?: string;
  device ?: string;
}
