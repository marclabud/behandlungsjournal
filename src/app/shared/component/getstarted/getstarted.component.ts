import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-getstarted',
  templateUrl: './getstarted.component.html',
  styleUrls: ['./getstarted.component.scss']
})
export class GetstartedComponent implements OnInit {
  //private removed due to angular aot-restriction
  /* tslint:disable-next-line:no-unused-variable */
  title: string = 'Get Started';
  /* tslint:disable-next-line:no-unused-variable */
  titlesize: string = '3';
  /* tslint:disable-next-line:no-unused-variable */
  btsize: string = 'lg';
  /* tslint:disable-next-line:no-unused-variable */
  login: boolean = true;
  /* tslint:disable-next-line:no-unused-variable */
  signup: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }
}
