import { Component, OnInit, Input } from '@angular/core';
import { Observation } from "../../model/Observation";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;

@Component({
  selector: 'app-observation-item',
  templateUrl: './observation-item.component.html',
  styleUrls: ['./observation-item.component.scss']
})
export class ObservationItemComponent implements OnInit {
  @Input() observation : Observation

  constructor() { }

  ngOnInit(): void {
  }

}
