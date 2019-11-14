import { Component, OnInit } from '@angular/core';
import { TruckService } from 'src/app/truck-service/truck.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Truck } from 'src/app/models/truck.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  /** truck data */
  truckData: Truck;

  constructor(private truckService: TruckService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    /** get params data using ID */
    const id = +this.route.snapshot.paramMap.get('id');
    this.truckService.getOrderId(id).subscribe(truckData => {
      this.truckData = truckData;
    });

  }
  /* complete trip function */
  completeOrder(id: number) {
    this.truckService.deleteItems(id).subscribe(deleteData => {
      this.router.navigate(['']);
    });
  }

}
