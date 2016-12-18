import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-titel',
  templateUrl: './titel.component.html',
  styleUrls: ['./titel.component.scss']
})
export class TitelComponent implements OnInit {

  @Input() title: string;
  @Input() titlesize: string = '4';
  @Input() btsize: string = 'sm';
  @Input() login: boolean = false;
  @Input() signup: boolean = false;
  @Input() getstarted: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }
}
