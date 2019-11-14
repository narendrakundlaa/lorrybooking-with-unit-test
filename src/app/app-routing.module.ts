import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** components section */
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EstimateFareComponent } from './components/estimate-fare/estimate-fare.component';
import { HistoryComponent } from './components/history/history.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'estimate-fare', component: EstimateFareComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'history/:id', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
