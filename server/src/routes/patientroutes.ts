
'use strict';
import {Router} from 'express';
const PatientController = require ('../controller/usercontroller');
import { paths} from './../server.conf';

const PatientRouter = Router();
// APIs
// select all patients
PatientRouter.get(paths.base_path + '/patients', PatientController.getAllPatients);

// count all patients
PatientRouter.get(paths.base_path + '/patients/count', PatientController.countPatients);

// create new patient
PatientRouter.post(paths.base_path + '/patient', PatientController.addPatient);

// find patient by id
PatientRouter.get(paths.base_path + '/patient/:id', PatientController.findPatientbyId);

// update patient by id
PatientRouter.put(paths.base_path + '/patient/:id', PatientController.updatePatient);

// delete patient by id
PatientRouter.delete(paths.base_path + '/patient/:id', PatientController.deletePatient);


export= PatientRouter;
