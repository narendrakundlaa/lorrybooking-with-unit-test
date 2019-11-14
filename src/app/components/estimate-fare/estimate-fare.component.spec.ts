import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EstimateFareComponent } from './estimate-fare.component';
import { StoragesService } from 'src/app/storages.service';
import { CardModule } from 'primeng/card';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Truck } from 'src/app/models/truck.model';
import { TruckService } from 'src/app/truck-service/truck.service';
import { AlertComponent } from 'src/app/shared-components/alert/alert.component';

class MockRouterService {
  navigate() { }
}
const mockRouterService = new MockRouterService();
describe('EstimateFareComponent', () => {
  let component: EstimateFareComponent;
  let fixture: ComponentFixture<EstimateFareComponent>;
  let service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EstimateFareComponent, AlertComponent],
      imports: [CardModule, HttpClientModule, RouterTestingModule],
      providers: [StoragesService, TruckService, {
        provide: Router,
        useValue: mockRouterService,
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimateFareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
