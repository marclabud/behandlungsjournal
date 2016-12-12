import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {BhJournal} from '../model/bhjournal';
import {BhJournalService} from '../service/bhjournal.service';

@Component({
    selector: 'app-bhjournal-list',
    templateUrl: 'bhjournal-list.component.html',
    styleUrls: ['bhjournal-list.component.css']
})
export class BhjournalListComponent implements OnInit {
    private isLoading = true;
    private selectedJournal: BhJournal;


    /* tslint:disable-next-line:no-unused-variable */
    private labelTherapieStart = 'Beginn:';
    /* tslint:disable-next-line:no-unused-variable */
    private labelTherapieEnde = 'Ende:';

    private infoMsg = {body: '', type: 'info'};

    @Input() journals: Array<BhJournal> = [];
    @Output() bhJournalChange: EventEmitter<BhJournal> = new EventEmitter<BhJournal>();
    @Output() bhJournalCountChange: EventEmitter<number> = new EventEmitter<number>();

    constructor(private bhjournalService: BhJournalService) {
    }

    ngOnInit() {
        this.getJournals(this.journals);
    }

    private getJournals(journals: Array<BhJournal>) {
        console.log('getJournals Parameter journals: ', journals);
        // this.bhJournalChange.emit(journals.length);
        this.journals = journals;
        console.log(this.journals.length);
        this.isLoading = false;
        // this.bhJournalChange.emit(this.journals.length);
    }

    onSelect(journal: BhJournal) {
        console.log('selectedJournal', journal);
        this.selectedJournal = journal;
        this.bhJournalChange.emit(journal);
    }

    /* tslint:disable-next-line:no-unused-variable */
    onCreateJournal() {
        let newbhJournal = new BhJournal();
        this.bhJournalChange.emit(newbhJournal);
    }

    /* tslint:disable-next-line:no-unused-variable */
    onDeleteJournal() {
        if (this.selectedJournal) {
            this.bhjournalService.deleteJournal(this.selectedJournal).subscribe(
                res => {
                    let pos = this.journals.map(obj => {
                        return obj._id;
                    }).indexOf(this.selectedJournal._id);
                    this.journals.splice(pos, 1);
                    this.actualizeCache();
                    this.sendInfoMsg('Medikation erfolgreich gelöscht.', 'success');
                },
                error => console.log(error)
            );
        } else {
            this.sendInfoMsg('Kein Journal zum Löschen ausgewählt.', 'danger');
        }
    }
    sendInfoMsg(body, type, time = 3000) {
        this.infoMsg.body = body;
        this.infoMsg.type = type;
        window.setTimeout(() => this.infoMsg.body = '', time);
    }
    private actualizeCache() {
        this.bhjournalService.writeCacheList(this.journals);
    }

}
