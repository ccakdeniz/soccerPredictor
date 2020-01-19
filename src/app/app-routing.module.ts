import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';
import { PastPredictionsComponent } from './past-predictions/past-predictions.component';
import { SuccessRateComponent } from './success-rate/success-rate.component';

const routes: Routes = [
  { path: 'upcoming-games', component: UpcomingGamesComponent },
  { path: 'past-predictions', component: PastPredictionsComponent },
  { path: 'success-rate', component: SuccessRateComponent },
  { path: '**', component: UpcomingGamesComponent },
  { path: '', component: UpcomingGamesComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
