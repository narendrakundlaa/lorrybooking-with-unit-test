import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Truck } from '../models/truck.model';

@Injectable({
  providedIn: 'root'
})
export class TruckService {
  truckUrl: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }


  /** get all truck list */
  getTruckDetails(): Observable<Truck[]> {
    return this.httpClient.get<Truck[]>(this.truckUrl + '/typeOfTrucks');
  }

  /** book the truck  */
  bookTruck(truck: Truck): Observable<Truck> {
    return this.httpClient.post<Truck>(this.truckUrl + '/orderDetails', truck, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
  /** delete truck items */
  deleteItems(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.truckUrl + '/orderDetails'}/${id}`);
  }
  /** get order by id */
  getOrderId(id: number): Observable<Truck> {
    return this.httpClient.get<Truck>(`${this.truckUrl + '/orderDetails'}/${id}`);

  }
}
