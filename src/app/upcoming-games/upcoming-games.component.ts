import { Component, OnInit } from '@angular/core';
import { PredictionService } from '../prediction.service';

@Component({
  selector: 'app-upcoming-games',
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.scss']
})
export class UpcomingGamesComponent implements OnInit {

  constructor(private predictionService: PredictionService) { }

  ngOnInit() {
    this.getPredictions();
  }
  predictions: any = [];
  errors: any = [];
  isBusy: boolean = false;

  getPredictions() {
    this.predictionService.GetFuturePredictions().subscribe((data: {}) => {
      this.predictions = data['data'];
    },
      error => {
        this.errors.push(error);
      }).add(() => {
        this.isBusy = false;
      });
  }

}
