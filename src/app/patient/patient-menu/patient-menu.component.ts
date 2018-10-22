import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PatientService} from '../service/patient.service';
import {MessageService} from '../../shared/service/message/message.service';
import {Patient} from '../model/patient';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SearchService} from '../../shared/component/service/search.service';

@Component({
  selector: 'app-patient-menu',
  templateUrl: './patient-menu.component.html',
  styleUrls: ['./patient-menu.component.scss']
})
export class PatientMenuComponent implements OnInit {

  searchForm: FormGroup;
  searchTerm: string;
  PatientsearchIsVisible = false;
  private messageServicePatient: MessageService<Patient>;
  private subscriptionPatient: Subscription;
  patient: Patient;

  @Output() private patientSelectionWithSearch: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private search: SearchService, private patientService: PatientService,
              private formBuilder: FormBuilder, private router: Router) {
    this.searchForm = formBuilder.group({
      searchTermCtrl: '',
    });
    this.messageServicePatient = patientService.messageService;
    this.subscriptionPatient = this.messageServicePatient.Itemselected$.subscribe(
      patient => {
        this.PatientsearchIsVisible = false;
        this.patient = patient;
        this.patientSelectionWithSearch.emit(false);
        this.router.navigate(['/bhjournal']);
      });
  }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe(value => {
      this.getSearchTerm(value);
    });
    this.searchForm.statusChanges.subscribe(value => {
      console.log('searchTerm Value', value);
    });
    this.getSelectedPatient();
  }

  onChoosePatient() {
    this.PatientsearchIsVisible = true;
    this.patientSelectionWithSearch.emit(true);
    this.patient.name = 'Kein Patient';
    this.router.navigate(['/patient-card']);
  }

  getSelectedPatient() {
    this.patient = this.patientService.readCache();
    if (this.patient !== null) {
      this.router.navigate(['/bhjournal']);
    } else {
      this.patient = new Patient();
      this.onChoosePatient();
    }
  }
  getSearchTerm(search) {
    console.log('searchTerm Value', search);
    if (search) {
      this.searchTerm = search.searchTermCtrl;
      this.search.setSearchTerm(this.searchTerm);
    }
  }
}
