import { Component, OnInit } from '@angular/core';
import { PredictionService } from '../prediction.service';
import { countriesList } from '../countries';

@Component({
  selector: 'app-upcoming-games',
  templateUrl: './upcoming-games.component.html',
  styleUrls: ['./upcoming-games.component.scss']
})
export class UpcomingGamesComponent implements OnInit {

  constructor(private predictionService: PredictionService) { }

  predictions: any = [];
  filteredPredictions: any = [];
  errors: any = [];
  isBusy: boolean = false;
  federations: any = [];
  countries: any = [];
  federationFilters: any = [];
  countriesFilters: any = [];

  ngOnInit() {
    this.getPredictions();
  }

  getPredictions() {
    this.isBusy = true;
    // this.predictionService.GetFuturePredictions().subscribe((data: {}) => {
    //   this.predictions = data['data'];
    //   if (this.predictions.length < 1) {
    this.predictions = [{ "federation": "UEFA", "prediction": "12", "market": "classic", "is_expired": true, "id": 89211, "odds": { "1": 2.268, "2": 2.777, "12": 1.276, "X2": 1.528, "X": 3.288, "1X": 1.368 }, "result": "postp", "last_update_at": "2020-01-18T20:14:12.751000", "season": "2019 - 2020", "start_date": "2020-01-20T17:00:00", "away_team": "Olympiakos Nicosia", "status": "postponed", "competition_name": "First Division", "competition_cluster": "Cyprus", "home_team": "Pafos FC" }, { "federation": "UEFA", "prediction": "1X", "market": "classic", "is_expired": true, "id": 89207, "odds": { "1": 1.843, "2": 4.31, "12": 1.283, "X2": 1.9, "X": 3.537, "1X": 1.207 }, "result": "", "last_update_at": "2020-01-20T05:09:04.976000", "season": "2019 - 2020", "start_date": "2020-01-20T20:00:00", "away_team": "Stoke", "status": "pending", "competition_name": "Championship", "competition_cluster": "England", "home_team": "West Bromwich" }, { "federation": "UEFA", "prediction": "1", "market": "classic", "is_expired": true, "id": 89219, "odds": { "1": 1.136, "2": 13.093, "12": 1.05, "X2": 5.094, "X": 8.376, "1X": 1.026 }, "result": "", "last_update_at": "2020-01-20T14:10:47.483000", "season": "2019 - 2020", "start_date": "2020-01-20T19:00:00", "away_team": "FC Dordrecht", "status": "pending", "competition_name": "Eerste Divisie", "competition_cluster": "Netherlands", "home_team": "Jong Ajax" }, { "federation": "UEFA", "prediction": "12", "market": "classic", "is_expired": true, "id": 89217, "odds": { "1": 2.342, "2": 2.822, "12": 1.298, "X2": 1.508, "X": 3.118, "1X": 1.353 }, "result": "2 - 2", "last_update_at": "2020-01-20T14:10:47.483000", "season": "2019 - 2020", "start_date": "2020-01-20T17:00:00", "away_team": "Hapoel Ashkelon", "status": "lost", "competition_name": "Liga Leumit", "competition_cluster": "Israel", "home_team": "Hapoel Afula" }, { "federation": "UEFA", "prediction": "1X", "market": "classic", "is_expired": true, "id": 89221, "odds": { "1": 2.269, "2": 3.051, "12": 1.29, "X2": 1.597, "X": 3.393, "1X": 1.36 }, "result": "2 - 0", "last_update_at": "2020-01-20T14:10:47.483000", "season": "2019 - 2020", "start_date": "2020-01-20T17:00:00", "away_team": "Genclerbirligi", "status": "won", "competition_name": "Super Lig", "competition_cluster": "Turkey", "home_team": "Caykur Rizespor" }, { "federation": "UEFA", "prediction": "12", "market": "classic", "is_expired": true, "id": 89220, "odds": { "1": 2.301, "2": 2.62, "12": 1.231, "X2": 1.553, "X": 3.739, "1X": 1.431 }, "result": "", "last_update_at": "2020-01-20T14:10:47.483000", "season": "2019 - 2020", "start_date": "2020-01-20T19:00:00", "away_team": "Roda JC Kerkrade", "status": "pending", "competition_name": "Eerste Divisie", "competition_cluster": "Netherlands", "home_team": "Jong FC Utrecht" }, { "federation": "UEFA", "prediction": "12", "market": "classic", "is_expired": true, "id": 89209, "odds": { "1": 3.143, "2": 2.451, "12": 1.367, "X2": 1.334, "X": 2.931, "1X": 1.509 }, "result": "", "last_update_at": "2020-01-20T14:10:47.483000", "season": "2019 - 2020", "start_date": "2020-01-20T20:00:00", "away_team": "Crotone", "status": "pending", "competition_name": "Serie B", "competition_cluster": "Italy", "home_team": "Cosenza" }, { "federation": "UEFA", "prediction": "1", "market": "classic", "is_expired": true, "id": 89215, "odds": { "1": 1.648, "2": 4.722, "12": 1.227, "X2": 2.063, "X": 3.628, "1X": 1.152 }, "result": "", "last_update_at": "2020-01-20T14:10:47.483000", "season": "2019 - 2020", "start_date": "2020-01-20T18:15:00", "away_team": "Maccabi Netanya", "status": "pending", "competition_name": "Premier League", "competition_cluster": "Israel", "home_team": "Beitar Jerusalem" }, { "federation": "UEFA", "prediction": "1", "market": "classic", "is_expired": true, "id": 89208, "odds": { "1": 1.194, "2": 13.451, "12": 1.087, "X2": 4.503, "X": 7.231, "1X": 1.037 }, "result": "", "last_update_at": "2020-01-20T14:10:47.483000", "season": "2019 - 2020", "start_date": "2020-01-20T19:45:00", "away_team": "SPAL", "status": "pending", "competition_name": "Serie A", "competition_cluster": "Italy", "home_team": "Atalanta" }, { "federation": "UEFA", "prediction": "1", "market": "classic", "is_expired": true, "id": 89214, "odds": { "1": 1.595, "2": 5.272, "12": 1.237, "X2": 2.152, "X": 3.555, "1X": 1.132 }, "result": " ", "last_update_at": "2020-01-20T14:10:47.483000", "season": "2019 - 2020", "start_date": "2020-01-20T18:00:00", "away_team": "Hapoel Haifa", "status": "pending", "competition_name": "Premier League", "competition_cluster": "Israel", "home_team": "Hapoel Beer Sheva" }, { "federation": "UEFA", "prediction": "2", "market": "classic", "is_expired": true, "id": 89213, "odds": { "1": 3.108, "2": 2.333, "12": 1.333, "X2": 1.322, "X": 2.898, "1X": 1.533 }, "result": "0 - 1", "last_update_at": "2020-01-20T14:10:47.483000", "season": "2019 - 2020", "start_date": "2020-01-20T17:00:00", "away_team": "Bnei Yehuda", "status": "won", "competition_name": "Premier League", "competition_cluster": "Israel", "home_team": "Hapoel Kfar Saba" }, { "federation": "UEFA", "prediction": "1", "market": "classic", "is_expired": true, "id": 89290, "odds": { "1": 1.333, "2": 7.074, "12": 1.138, "X2": 2.788, "X": 4.577, "1X": 1.058 }, "result": "2 - 1", "last_update_at": "2020-01-20T14:10:47.483000", "season": "2019 - 2020", "start_date": "2020-01-20T18:00:00", "away_team": "Sliema Wanderers", "status": "won", "competition_name": "Premier League", "competition_cluster": "Malta", "home_team": "Valletta" }];
    // }
    this.populateGroups();
    this.isBusy = false;
    // },
    //   error => {
    //     this.errors.push(error);
    //   }).add(() => {
    //     this.isBusy = false;
    //   });
  }

  populateGroups() {
    this.predictions.forEach(prediction => {
      if (this.federations.indexOf(prediction.federation) < 0) {
        this.federations.push(prediction.federation);
      }
      let countryCode = countriesList.list.filter(c => c.name.includes(prediction.competition_cluster))[0].code;
      prediction.countryCode = countryCode;
      if (this.countries.filter(cntrs => cntrs.countryName.includes(prediction.competition_cluster)).length < 1) {
        this.countries.push({ 'countryName': prediction.competition_cluster, 'countryCode': countryCode });
      }
    });
    this.filteredPredictions = this.predictions;
  }

  addFilter(val: any, type: string) {
    if (type === 'federation' && this.federationFilters.filter(f => f.name.includes(val)).length < 1) {
      this.federationFilters.push({ 'name': val });
      this.applyFilters();
    }
    else if (type === 'country' && this.countriesFilters.filter(f => f.countryName.includes(val.countryName)).length < 1) {
      this.countriesFilters.push(val);
      this.applyFilters();
    }
  }

  removeFilter(val: any, type: string) {
    if (type === 'federation') {
      this.federationFilters.splice(this.federationFilters.indexOf(val), 1);
    }
    else if (type === 'country') {
      this.countriesFilters.splice(this.countriesFilters.indexOf(val), 1);
    }
    this.applyFilters();
  }

  applyFilters() {
    this.filteredPredictions=[];
    this.federationFilters.forEach(ff => {
      this.filteredPredictions = this.filteredPredictions.concat(this.predictions.filter(p => p.federation.includes(ff.name)));
    });
    this.countriesFilters.forEach(cf => {
      this.filteredPredictions = this.filteredPredictions.concat(this.predictions.filter(p => p.competition_cluster.includes(cf.countryName)));
    });
    if(this.federationFilters.length === 0 && this.countriesFilters.length === 0){
      this.filteredPredictions = this.predictions;
    }
  }

}
