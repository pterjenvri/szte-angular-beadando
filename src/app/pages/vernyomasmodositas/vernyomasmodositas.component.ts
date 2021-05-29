import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import {Observation} from "../../shared/models/Observation";
import {CrudService} from "../../services/crud.service";
import {AddObservationComponent} from "../../components/add-observation/add-observation.component";
import {MatDialog} from "@angular/material/dialog";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-vernyomasmodositas',
  templateUrl: './vernyomasmodositas.component.html',
  styleUrls: ['./vernyomasmodositas.component.scss']
})
export class VernyomasmodositasComponent implements OnInit, AfterViewInit, OnDestroy {
  observations : Observation[] = [];
  subscriptions : Subscription[] = [];

  constructor(private dialog: MatDialog, private service: CrudService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.getObservations();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => {
      x.unsubscribe();
    })
  }

  getObservations() {
    this.observations = this.service.get('observations');
  }

  modifyObservation(observation: Observation) {
      const dialogRef = this.dialog.open(AddObservationComponent, {});
      dialogRef.componentInstance.observation = observation;
      dialogRef.componentInstance.buttonText = 'Módosítás';
      const subscription = dialogRef.afterClosed().subscribe((observation: Observation) => {
        console.log(observation);
        if (observation?.category) {
          this.service.update('observations', observation.id, observation);
          this.getObservations();
        }
      }, err => {
        console.warn(err);
      });
      this.subscriptions.push(subscription);
  }
}
