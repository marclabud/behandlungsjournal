import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {SearchService} from '../service/search.service';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [SearchComponent],
  providers: [SearchService],

})
export class SearchModule {}
