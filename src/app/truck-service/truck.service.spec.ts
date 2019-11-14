import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { TruckService } from './truck.service';
import { Truck } from '../models/truck.model';

describe('TruckService', () => {
  let service: TruckService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [TruckService]
    });
    service = TestBed.get(TruckService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    expect(service.getTruckDetails).toBeTruthy();
  });

  it('to be able to retrieve posts from the API bia GET', () => {
    const MockData: Truck[] = [
      {
        id: 1,
        title: 'PICKUP / DOST / SUPER ACE / 8FT',
        price: 2000,
        image: 'assets/truck2.jpg',
        capacity: '1200 kgs',
        size: '8.2ft x 4.9ft x 4.9ft'
      },
      {
        id: 2,
        title: 'TATA ACE',
        price: 1000,
        image: 'assets/truck1.jpg',
        capacity: '750 kgs',
        size: '7.2ft x 4.9ft x 4.9ft'
      },
      {
        id: 3,
        title: 'TATA 407',
        price: 5000,
        image: 'assets/truck3.jpg',
        capacity: '5500 kg',
        size: '9.5ft x 5.5ft x 6ft'
      }
    ];
    service.getTruckDetails().subscribe(data => {
      expect(data.length).toBe(3);
      expect(data).toEqual(MockData);
    });
    const request = httpMock.expectOne(`${service.truckUrl}/typeOfTrucks`);
    expect(request.request.method).toBe('GET');
    request.flush(MockData);
  });


  it('to be able to Send Data TO the API bia POST', () => {
    const MockData: Truck = {
      id: 1,
      title: 'PICKUP / DOST / SUPER ACE / 8FT',
      price: 2000,
      image: 'assets/truck2.jpg',
      capacity: '1200 kgs',
      size: '8.2ft x 4.9ft x 4.9ft'
    }

    service.bookTruck(MockData).subscribe(data => {
      // expect(data).toBe(1);
      expect(data).toEqual(MockData);
    });
    const request = httpMock.expectOne(`${service.truckUrl}/orderDetails`);
    expect(request.request.method).toBe('POST');
    request.flush(MockData);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
