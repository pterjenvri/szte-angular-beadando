import {Component, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-observation',
  templateUrl: './add-observation.component.html',
  styleUrls: ['./add-observation.component.scss']
})
export class AddObservationComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    category: new FormControl('Vérnyomás'),
    issued: new FormControl(''),
    performer: new FormControl(''),
    systolicmmHgValue: new FormControl(0),
    diastolicmmHgValue: new FormControl(0),
    note: new FormControl(''),
    device: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<AddObservationComponent>) { }

  ngOnInit(): void {
  }

}
