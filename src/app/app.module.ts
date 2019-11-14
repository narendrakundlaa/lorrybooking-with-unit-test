import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
/** components  */
import { AppComponent } from './app.component';
import { InputComponent } from './shared-components/input/input.component';
import { TableComponent } from './shared-components/table/table.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { AlertComponent } from './shared-components/alert/alert.component';
import { LoginComponent } from './components/login/login.component';
import { SupportComponent } from './components/support/support.component';
import { TrackorderComponent } from './components/trackorder/trackorder.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EstimateFareComponent } from './components/estimate-fare/estimate-fare.component';
import { HistoryComponent } from './components/history/history.component';

/** ng bootstrap  */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


/** primeNG */
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    LoginComponent,
    SupportComponent,
    TrackorderComponent,
    DashboardComponent,
    EstimateFareComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    CardModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
