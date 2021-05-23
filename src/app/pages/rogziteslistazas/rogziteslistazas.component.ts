import { Component, OnInit } from '@angular/core';
import {CrudService} from "../../services/crud.service";
import {Observation} from "../../model/Observation";
import {Observable} from "rxjs";

@Component({
  selector: 'app-rogziteslistazas',
  templateUrl: './rogziteslistazas.component.html',
  styleUrls: ['./rogziteslistazas.component.scss']
})
export class RogziteslistazasComponent implements OnInit {
  observations : Observation[];

  constructor(private service: CrudService) { }

  ngOnInit(): void {
    this.getObservations();
  }

  getObservations() {
    this.observations = this.service.get('observations');
  }

}
