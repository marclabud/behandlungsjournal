import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  private patients = [];
  private isLoading = true;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getPatients();
  }
  getPatients() {
    this.patientService.getPatients().subscribe(
      data => this.patients = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  };

}
