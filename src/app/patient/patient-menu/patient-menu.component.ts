import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {PatientService} from '../service/patient.service';
import {MessageService} from '../../shared/service/message/message.service';
import {Patient} from '../model/patient';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-menu',
  templateUrl: './patient-menu.component.html',
  styleUrls: ['./patient-menu.component.scss']
})
export class PatientMenuComponent implements OnInit {
  private messageServicePatient: MessageService<Patient>;
  private subscriptionPatient: Subscription;
  private patient: Patient;

  @Output() private patientSelectionWithSearch: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private patientService: PatientService, private router: Router) {
    this.messageServicePatient = patientService.messageService;
    this.subscriptionPatient = this.messageServicePatient.Itemselected$.subscribe(
      patient => {
        this.patient = patient;
        this.patientSelectionWithSearch.emit(false);
        this.router.navigate(['/bhjournal']);
      });
  }

  ngOnInit() {
    this.getSelectedPatient();
  }
  onChoosePatient() {
    this.patientSelectionWithSearch.emit(true);
    this.router.navigate(['/patient-card']);
  }
  getSelectedPatient() {
    this.patient = this.patientService.readCache();
    if (this.patient !== null) {
      this.router.navigate(['/bhjournal']);
    } else {
      this.patient = new Patient();
      this.patient.name = 'Bitte auswählen...';
    }
  }

}
