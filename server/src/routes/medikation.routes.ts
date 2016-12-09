import {Router} from 'express';
import {paths} from '../server.conf';
const MedicationController = require('../controller/medikation.controller');

const MedicationRouter = Router();
// APIs
// select all medications
MedicationRouter.get(paths.base_path + '/medications', MedicationController.getAllMedications);

// select all medications of one journal
MedicationRouter.get(paths.base_path + '/medications/:journal_id', MedicationController.getMedicationsByJournalId);

// count all medications
MedicationRouter.get(paths.base_path + '/medications/count', MedicationController.countMedications);

// create new medication
MedicationRouter.post(paths.base_path + '/medication', MedicationController.addMedication);

// find medication by id
MedicationRouter.get(paths.base_path + '/medication/:id', MedicationController.findMedicationById);

// update medication by id
MedicationRouter.put(paths.base_path + '/medication/:id', MedicationController.updateMedication);

// delete medication by id
MedicationRouter.delete(paths.base_path + '/medication/:id', MedicationController.deleteMedication);

export= MedicationRouter;

