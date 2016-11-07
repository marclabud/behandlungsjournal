'use strict';
import {Router} from 'express';
const JournalController = require ('../controller/journalcontroller');
import { paths} from './../server.conf';

const JournalRouter = Router();
// APIs
// select all journals
JournalRouter.get(paths.base_path + '/journals', JournalController.getAllJournals);

// select all journals of one patient
JournalRouter.get(paths.base_path + '/journals/:patient_id', JournalController.getAllJournalsbyPatientId);

// count all journals
JournalRouter.get(paths.base_path + '/journals/count', JournalController.countJournals);

// create new journal
JournalRouter.post(paths.base_path + '/journal', JournalController.addJournal);

// find journal by id
JournalRouter.get(paths.base_path + '/journal/:id', JournalController.findJournalbyId);

// update journal by id
JournalRouter.put(paths.base_path + '/journal/:id', JournalController.updateJournal);

// delete journal by id
JournalRouter.delete(paths.base_path + '/journal/:id', JournalController.deleteJournal);


export= JournalRouter;

