import { Component, OnInit } from '@angular/core';
import {Observation} from "../../shared/models/Observation";
import {CrudService} from "../../services/crud.service";

@Component({
  selector: 'app-rogzitestorles',
  templateUrl: './rogzitestorles.component.html',
  styleUrls: ['./rogzitestorles.component.scss']
})
export class RogzitestorlesComponent implements OnInit {
  observations : Observation[];

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.getObservations();
  }

  getObservations() {
    this.observations = this.service.get('observations');
  }

  deleteObservation(observation: Observation) {
    this.service.delete('observations', observation.id).then(() => this.observations = this.observations.filter((o) => o.id !== observation.id))
  }
}
