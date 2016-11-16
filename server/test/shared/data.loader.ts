import {IData} from './data';
import {Db} from '@types/mongodb';

export abstract class DataLoader {

  private db: Db;
  private data: IData;

  // constructor
  constructor(db: Db, data: IData) {
    this.db = db;
    this.data = data;
    this.prepareData();
  }

  // main
  prepareData() {
    console.log('\nPrepare collection ' + this.getCollectionName() + ':');
    this.drop();
    this.insert(this.data.getData());
  }

  // drop collection
  drop() {
    this.db.collection(this.getCollectionName()).drop(() => {
      console.log('- Drop collection ' + this.getCollectionName());
    });
  }

  // insert data
  insert(data) {
    this.db.collection(this.getCollectionName()).insert(data, () => {
      data.forEach((obj) => {
        console.log('+ ' + this.getCollectionName() + ' added as ' + obj.name);
      });
    });
  }

  // get Collection Name
  abstract getCollectionName(): string;
}
