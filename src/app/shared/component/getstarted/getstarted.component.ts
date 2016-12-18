import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.scss']
})
export class GetstartedComponent implements OnInit {

  /* tslint:disable-next-line:no-unused-variable */
  private title: string = 'Get Started';
  /* tslint:disable-next-line:no-unused-variable */
  private titlesize: string = '3';
  /* tslint:disable-next-line:no-unused-variable */
  private btsize: string = 'lg';
  /* tslint:disable-next-line:no-unused-variable */
  private login: boolean = true;
  /* tslint:disable-next-line:no-unused-variable */
  private signup: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }
}
