import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';

import { API_BASE_URL } from '../injection-tokens';
import { ClientService } from './client.service';

describe('ClientService', () => {
  let service: ClientService;
  let httpTestingController: HttpTestingController;
  let subscription: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ClientService,
        {
          provide: API_BASE_URL,
          useValue: 'https://restcountries.com/v3'
        },
      ]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(ClientService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
    subscription?.unsubscribe();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get All Countries', (done) => {
    const response = [
      {
          cca3: 'DEU',
          name: {
            common: 'Germany'
          },
          capital: ['Berlin'],
          region: 'europe',
          subregion: '',
          borders: [],
          area: 8798,
          flags: []
      }
    ];

    subscription = service.getAllCountries$().subscribe((countries) => {
      expect(countries).toBeDefined();
      expect(countries[0].cca3).toEqual('DEU');

      done();
    });

    const req = httpTestingController.expectOne('https://restcountries.com/v3/all');
    req.flush(response);
  });

  it('should get Country by code', (done) => {
    const response = [{
          cca3: 'DEU',
          name: {
            common: 'Germany'
          },
          capital: ['Berlin'],
          region: 'europe',
          subregion: '',
          borders: [],
          area: 8798,
          flags: []
      }];

    subscription = service.getCountryByCode$('DEU').subscribe((country) => {
      console.log(country);
      expect(country).toBeDefined();
      expect(country.cca3).toEqual('DEU');

      done();
    });

    const req = httpTestingController.expectOne('https://restcountries.com/v3/alpha/DEU');
    req.flush(response);
  });
});
