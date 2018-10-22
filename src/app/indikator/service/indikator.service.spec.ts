/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {IndikatorService} from './indikator.service';
import {HttpClient} from '@angular/common/http';


describe('IndikatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndikatorService],
      imports: [HttpClient]
    });
  });

  it('should ...', inject([IndikatorService], (service: IndikatorService) => {
    expect(service).toBeTruthy();
  }));
});
