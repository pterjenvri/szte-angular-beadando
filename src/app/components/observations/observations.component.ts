import {Component, Input, OnInit} from '@angular/core';
import {Observation} from "../../shared/models/Observation";

@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.scss']
})
export class ObservationsComponent implements OnInit {
  @Input() observations : Observation[];

  constructor() { }

  ngOnInit(): void {
  }

}
