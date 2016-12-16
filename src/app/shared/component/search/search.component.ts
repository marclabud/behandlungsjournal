import {Component, OnInit, Input} from '@angular/core';
import {SearchService} from '../service/search.service';
import {MessageService} from '../../service/message/message.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() isVisible: Boolean = true;
  constructor(private search: SearchService ) {
  }

  ngOnInit() {
  }

}
