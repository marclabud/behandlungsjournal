'use strict';
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
// ToDo Rating Id new ObjectID
class IndikatorData {
    constructor() {
        this.indikator = [
            {
                _id: new ObjectId('5835ec3cf47d103118bbd8ca'),
                name: 'Allgemeinzustand',
                journal_id: '1',
                haeufigkeit: {
                    morgens: true,
                    mittags: false,
                    abends: true
                },
                dauer: {
                    startDatum: new Date('2016-11-07T07:00:00.000Z'),
                    endeDatum: new Date('2016-11-16T17:00:00.000Z')
                }
            },
            {
                _id: new ObjectId('5835ee70f47d103118bbd8cc'),
                name: 'Fieber',
                journal_id: '2',
                haeufigkeit: {
                    morgens: true,
                    mittags: true,
                    abends: true
                },
                dauer: {
                    startDatum: new Date('2016-10-10T07:00:00.000Z'),
                    endeDatum: new Date('2016-10-15T17:00:00.000Z')
                }
            },
            {
                _id: new ObjectId('5835eefdf47d103118bbd8ce'),
                name: 'Augenzustand',
                journal_id: '1',
                haeufigkeit: {
                    morgens: true,
                    mittags: false,
                    abends: false
                },
                dauer: {
                    startDatum: new Date('2016-09-10T07:00:00.000Z'),
                    endeDatum: new Date('2016-09-15T17:00:00.000Z')
                }
            }
        ];
    }
    getData() {
        return this.indikator;
    }
}
exports.IndikatorData = IndikatorData;
//# sourceMappingURL=indikator.data.js.map