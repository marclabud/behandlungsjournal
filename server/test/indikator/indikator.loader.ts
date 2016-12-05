"use strict";
const data_loader_1 = require('../shared/data.loader');
class IndikatorLoader extends data_loader_1.DataLoader {
    constructor(db, data) {
        super(db, data);
    }
    // some specific loader
    // ...
    getCollectionName() {
        return 'Indikator';
    }
}
exports.IndikatorLoader = IndikatorLoader;
//# sourceMappingURL=indikator.loader.js.map