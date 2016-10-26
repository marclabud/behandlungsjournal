import { Component, OnInit } from '@angular/core';
import {Patient} from '../patient/model/patient';


@Component({
  selector: 'app-bhjournal',
  templateUrl: './bhjournal.component.html',
  styleUrls: ['./bhjournal.component.css']
})
export class BhjournalComponent implements OnInit {
  title = 'Behandlungsjournal';
  selectedPatient: Patient;
  constructor() { }

  ngOnInit() {
  }
}
