import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CrudService} from "../../services/crud.service";
import {Observation} from "../../model/Observation";
import {AddObservationComponent} from "../../components/add-observation/add-observation.component";

@Component({
  selector: 'app-vernyomasrogzites',
  templateUrl: './vernyomasrogzites.component.html',
  styleUrls: ['./vernyomasrogzites.component.scss']
})
export class VernyomasrogzitesComponent implements OnInit {

  constructor(private dialog: MatDialog, private service: CrudService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddObservationComponent, {});
    dialogRef.afterClosed().subscribe((observation: Observation) => {
      console.log(observation);
      if (observation?.category) {
        this.service.create('observations', observation);
      }
    }, err => {
      console.warn(err);
    });
  }

}
