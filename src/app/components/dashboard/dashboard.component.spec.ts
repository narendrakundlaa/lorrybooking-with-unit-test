import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { InputComponent } from 'src/app/shared-components/input/input.component';
import { AlertComponent } from 'src/app/shared-components/alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { StoragesService } from 'src/app/storages.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
/** navigate method */
class MockRouterService {
  navigate() { }
}
const mockRouterService = new MockRouterService();
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, InputComponent, AlertComponent],
      imports: [ReactiveFormsModule, DropdownModule, RouterTestingModule, CardModule],
      /** navigate method{provide: Router, useValue: mockRouterService,}] */
      providers: [StoragesService,
        {
          provide: Router,
          useValue: mockRouterService,
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should submit with displayAlert is true', async(() => {

    component.onSubmit();
    expect(component.displayAlert).toBeTruthy();
  }));
  it('should call navigate', () => {
    spyOn(mockRouterService, 'navigate');
    component.onSubmit();
    expect(mockRouterService.navigate).toHaveBeenCalled();
  });
});
