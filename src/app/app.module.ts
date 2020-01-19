import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpcomingGamesComponent } from './upcoming-games/upcoming-games.component';
import { PastPredictionsComponent } from './past-predictions/past-predictions.component';
import { SuccessRateComponent } from './success-rate/success-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    UpcomingGamesComponent,
    PastPredictionsComponent,
    SuccessRateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
