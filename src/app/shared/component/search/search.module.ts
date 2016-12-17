import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchService} from '../service/search.service';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [SearchComponent],
  providers: [SearchService],

})
export class SearchModule {}
