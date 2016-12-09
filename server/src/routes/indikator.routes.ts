import {Router} from 'express';
import {paths} from '../server.conf';
const Indicator = require('../controller/indikator.controller');

const IndicatorRouter = Router();
// APIs
// select all indicators
IndicatorRouter.get(paths.base_path + '/indicators', Indicator.getAllIndicators);

// select all indicators of one journal
IndicatorRouter.get(paths.base_path + '/indicators/:journal_id', Indicator.getIndicatorsByJournalId);

// count all indicators
IndicatorRouter.get(paths.base_path + '/indicators/count', Indicator.countIndicators);

// create new indicator
IndicatorRouter.post(paths.base_path + '/indicator', Indicator.addIndicator);

// find indicator by id
IndicatorRouter.get(paths.base_path + '/indicator/:id', Indicator.findIndicatorById);

// update indicator by id
IndicatorRouter.put(paths.base_path + '/indicator/:id', Indicator.updateIndicator);

// delete indicator by id
IndicatorRouter.delete(paths.base_path + '/indicator/:id', Indicator.deleteIndicator);

export= IndicatorRouter;

