import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Observation} from "../../shared/models/Observation";

@Component({
  selector: 'app-add-observation',
  templateUrl: './add-observation.component.html',
  styleUrls: ['./add-observation.component.scss']
})
export class AddObservationComponent implements OnInit {
  public observation ?: Observation;
  public buttonText : string;
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddObservationComponent>) { }

  ngOnInit(): void {
    console.log(this.observation);
    if(this.observation === undefined) {
      this.form = new FormGroup({
        id: new FormControl(''),
        identifier: new FormControl(''),
        basedOn: new FormControl(''),
        partOf: new FormControl(''),
        status: new FormControl('', Validators.required),
        category: new FormControl('Vérnyomás'),
        code: new FormControl('', Validators.required),
        subject: new FormControl(''),
        focus: new FormControl(''),
        encounter: new FormControl(''),
        effective: new FormControl(''),
        issued: new FormControl('', Validators.required),
        performer: new FormControl(''),
        systolicmmHgValue: new FormControl('', [Validators.min(0), Validators.max(200), Validators.pattern("^[0-9]*$")]),
        diastolicmmHgValue: new FormControl('', [Validators.min(0), Validators.max(200), Validators.pattern("^[0-9]*$")]),
        dataAbsentReason: new FormControl(''),
        interpretation: new FormControl(''),
        note: new FormControl(''),
        bodySite: new FormControl(''),
        method: new FormControl(''),
        specimen: new FormControl(''),
        device: new FormControl(''),
        referenceRange: new FormControl(''),
        hasMember: new FormControl(''),
        derivedFrom: new FormControl(''),
        component: new FormControl('')
      });
    }
    else {
      this.form = new FormGroup({
        id: new FormControl(this.observation.id),
        identifier: new FormControl(this.observation.identifier),
        basedOn: new FormControl(this.observation.basedOn),
        partOf: new FormControl(this.observation.basedOn),
        status: new FormControl(this.observation.status, Validators.required),
        category: new FormControl('Vérnyomás'),
        code: new FormControl(this.observation.code, Validators.required),
        subject: new FormControl(this.observation.subject),
        focus: new FormControl(this.observation.focus),
        encounter: new FormControl(this.observation.encounter),
        effective: new FormControl(this.observation.effective),
        issued: new FormControl(this.observation.issued, Validators.required),
        performer: new FormControl(this.observation.performer),
        systolicmmHgValue: new FormControl(this.observation.systolicmmHgValue, [Validators.min(0), Validators.max(200), Validators.pattern("^[0-9]*$")]),
        diastolicmmHgValue: new FormControl(this.observation.diastolicmmHgValue, [Validators.min(0), Validators.max(200), Validators.pattern("^[0-9]*$")]),
        dataAbsentReason: new FormControl(this.observation.dataAbsentReason),
        interpretation: new FormControl(this.observation.interpretation),
        note: new FormControl(this.observation.note),
        bodySite: new FormControl(this.observation.bodySite),
        method: new FormControl(this.observation.method),
        specimen: new FormControl(this.observation.specimen),
        device: new FormControl(this.observation.device),
        referenceRange: new FormControl(this.observation.referenceRange),
        hasMember: new FormControl(this.observation.hasMember),
        derivedFrom: new FormControl(this.observation.derivedFrom),
        component: new FormControl(this.observation.component)
      });
    }
  }
}
