import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Observation} from "../../shared/models/Observation";

@Component({
  selector: 'app-delete-observation',
  templateUrl: './delete-observation.component.html',
  styleUrls: ['./delete-observation.component.scss']
})
export class DeleteObservationComponent implements OnInit {
  @Input() observation : Observation;
  @Input() buttonText: string;
  @Output() onButtonClick : EventEmitter<Observation> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(observation: Observation) {
    this.onButtonClick.emit(observation);
  }
}
