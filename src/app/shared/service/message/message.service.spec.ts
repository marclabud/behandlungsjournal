/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {MessageService} from './message.service';
import {Patient} from '../../../patient/model/patient';
import {Http, BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';


// describe('Service: Message', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [MessageService,
//         MockBackend,
//         BaseRequestOptions,
//         {
//           provide: Http,
//           useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
//             return new Http(backendInstance, defaultOptions);
//           }}]
//     });
//   });

//   it('should ...', inject([MessageService], (service: MessageService<Patient>) => {
//     expect(service).toBeTruthy();
//   }));
// });
