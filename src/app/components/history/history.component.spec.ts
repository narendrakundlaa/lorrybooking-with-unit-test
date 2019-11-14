import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './history.component';
import { RouterTestingModule } from '@angular/router/testing';

/** p-header */
import { CardModule } from 'primeng/card';
import { TruckService } from 'src/app/truck-service/truck.service';
describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryComponent],
      imports: [CardModule, HttpClientModule, RouterTestingModule],
      providers: [TruckService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
