/* tslint:disable:no-unused-variable */
import {TestBed, inject} from '@angular/core/testing';
import {HttpClientModule} from '@angular//common/http';
import {MedikationService} from './medikation.service';


describe('Service: Medikation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedikationService],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([MedikationService], (service: MedikationService) => {
    expect(service).toBeTruthy();
  }));
});
