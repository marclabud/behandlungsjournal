import {Component, OnInit, Input} from '@angular/core';
import {MedikationService} from '../service/medikation.service';
import {Medikation} from '../model/medikation';
import {BhJournal} from '../../bhjournal/model/bhjournal';
import {BhJournalService} from '../../bhjournal/service/bhjournal.service';


@Component({
  selector: 'app-medicament-detail',
  templateUrl: './medicament-detail.component.html',
  styleUrls: ['./medicament-detail.component.css']
})
export class MedicamentDetailComponent implements OnInit {

  @Input()
  medikation: Medikation = new Medikation();

  private journal: BhJournal = null;
  private medications: Array<Medikation> = [];
  private infoMsg = {body: '', type: 'info'};

  constructor(private medikationService: MedikationService, private bhjournalService: BhJournalService) {
    this.journal = this.bhjournalService.readCache();
    this.medikation.journal_id = this.journal._id;
  }

  ngOnInit() {
  }

  addMedication(medikation) {
    console.log('Medikament wird gespeichert', JSON.stringify(medikation));
    if (typeof(medikation._id) === 'undefined' || medikation._id === '') {
      // Neue medikation anlegen
      this.medikationService.addMedikation(medikation).subscribe(
        res => {
          this.actualizeCache();
          this.sendInfoMsg('Medikament erfolgreich hinzugefügt.', 'success');
        },
        error => console.log(error)
      );
    }
    // else {
    //   // Patientendaten ändern mit bestehender _id
    //   this.patientService.editPatient(patient).subscribe(
    //     res => {
    //       this.actualizeCache();
    //       this.sendInfoMsg('Patient erfolgreich geändert.', 'success');
    //     },
    //     error => console.log(error)
    //   );
    // }
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = '', time);
  }

  private actualizeCache() {
    this.medikationService.writeCacheList(this.medications);
  }
}
