const Indikator = require('../models/indikator.model');

import * as mongoose from 'mongoose';
let ObjectId = mongoose.Types.ObjectId;

module.exports.getAllIndicators = (request, response) => {
  Indikator.find({}, (err, docs) => {
    console.log('getAllIndicators: docs', docs);
    if (err) {
      return console.error(err);
    }
    response.status(200).json(docs);
  });
};

module.exports.getIndicatorsByJournalId = (request, response) => {
  let objectId = ObjectId( request.params.journal_id);
  console.log('parameter journal_id', objectId );
  Indikator.find({journal_id: objectId}, (err, docs) => {
    console.log('getIndicatorsByJournalId: docs', docs);
    if (err) {
      return console.error(err);
    }
    response.status(200).json(docs);
  });
};

module.exports.countIndicators = (request, response) => {
  Indikator.count((err, count) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(count);
  });
};

module.exports.addIndicator = (request, response) => {
  let IndicatortoUpdate = new Indikator(request.body);
  IndicatortoUpdate.save((err) => {
    if (err) {
      return console.error(err);
    }
    response.status(200).json(IndicatortoUpdate);
  });
};
module.exports.findIndicatorById = (request, response) => {
  Indikator.findOne({_id: request.params.id}, (err, docs) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200).json(docs);
  });
};
// update Indicator by Id
module.exports.updateIndicator = (request, response) => {
  Indikator.findOneAndUpdate({_id: request.params.id}, request.body, (err) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200);
  });
};

module.exports.deleteIndicator = (request, response) => {
  Indikator.findOneAndRemove({_id: request.params.id}, (err) => {
    if (err) {
      return console.error(err);
    }
    response.sendStatus(200);
  });
};

