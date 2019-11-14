import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoragesService } from 'src/app/storages.service';

/** Inter face for city list */
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /** Alert message variables */
  alertType: string;
  displayAlert: boolean = false;
  alertMessage: string;

  /** create form */
  employeeForm: FormGroup;


  cities1: any[];
  cities2: City[];

  constructor(private fb: FormBuilder, private router: Router, private storagesService: StoragesService) {
    this.cities1 = [
      { label: 'Requirement', value: null },
      { label: 'Personal', value: { id: 1, name: 'Personal' } },
      { label: 'Business', value: { id: 2, name: 'Business' } }
    ];
    this.cities2 = [
      { name: 'Select', code: 'select' },
      { name: 'Banglore', code: 'NY' },
      { name: 'Chennai', code: 'RM' },
      { name: 'Hyderabad', code: 'LDN' },
      { name: 'Pune', code: 'IST' },
      { name: 'Mumbai', code: 'PRS' }
    ];
  }

  ngOnInit() {

    /** employee form */
    this.employeeForm = this.fb.group({
      location: ['', Validators.required],
      pickUpAddress: ['', Validators.required],
      dropOffAddress: ['', Validators.required],
      name: ['', Validators.required],
      requirement: ['', Validators.required],
    });
    setTimeout(() => {
      this.displayAlert = false;
    }, 1000);
  }

  /** submit employee data */
  onSubmit() {
    this.alertType = 'success';
    this.displayAlert = true;
    this.alertMessage = ` ${this.employeeForm.get('name').value} ..! Record has been created`;
    this.router.navigate(['estimate-fare']);
    this.storagesService.localStoregeSetItem('UserName', this.employeeForm.controls.name.value);
  }

}
