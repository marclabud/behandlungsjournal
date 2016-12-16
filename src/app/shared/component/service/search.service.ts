import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class SearchService {
  // Observable string sources
  private selectedSearchTermSource = new Subject<String>();
  // Observable string streams
  SearchTermselected$ = this.selectedSearchTermSource.asObservable();

  constructor() {
  }

  setSearchTerm(searchTerm: String) {

  }

  getSearchTerm(searchTerm: String) {

  }

}
