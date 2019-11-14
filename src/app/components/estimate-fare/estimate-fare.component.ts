import { Component, OnInit } from '@angular/core';
import { StoragesService } from 'src/app/storages.service';
import { TruckService } from 'src/app/truck-service/truck.service';
import { Truck } from 'src/app/models/truck.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-estimate-fare',
  templateUrl: './estimate-fare.component.html',
  styleUrls: ['./estimate-fare.component.css']
})
export class EstimateFareComponent implements OnInit {
  getName: string;
  truckData: Truck[];

  /** Alert message variables */
  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;

  constructor(private storagesService: StoragesService, private truckService: TruckService, private router: Router) { }

  ngOnInit() {

    /** get local storage method */
    this.getName = this.storagesService.localStoregeGetItem('UserName');

    /** get all truck details */
    this.truckService.getTruckDetails().subscribe((TruckList: Truck[]) => {
      this.truckData = TruckList;
    });
    setTimeout(() => {
      this.displayAlert = false;
    }, 2000);
  }
  /** book the truck */
  BookIngTruck(item: Truck) {
    this.truckService.bookTruck(item).subscribe(booked => {
      if (booked) {
        this.alertType = 'success';
        this.displayAlert = true;
        this.alertMessage = `Congrat..! successfully booked`;
        setTimeout(() => {
          this.router.navigate(['history', item.id]);
          this.storagesService.localStoregeRemoveItem('UserName');
        }, 2000);

      }
    },
      (error: HttpErrorResponse) => {
        // console.log(error);
        if (error) {
          alert('Truck is already booked');
        }
      });
  }

}
