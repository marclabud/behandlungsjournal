import {Component, OnInit, Input} from '@angular/core';
import {SearchService} from '../service/search.service';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  searchTerm: string;

  @Input() isVisible: Boolean = true;

  constructor(private search: SearchService, private formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      searchTermCtrl: '',
    });
  }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe(value => {
      this.getSearchTerm(value);
    });
    this.searchForm.statusChanges.subscribe(value => {
      console.log('searchTerm Value', value);
    });
  }

  getSearchTerm(search) {
    console.log('searchTerm Value', search);
    if (search) {
      this.searchTerm = search.searchTermCtrl;
      this.search.setSearchTerm(this.searchTerm);
    }
  }
}
