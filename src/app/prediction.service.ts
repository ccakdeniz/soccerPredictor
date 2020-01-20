import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { rapidApiKeys } from '../app/rapidApiKeys';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private http: HttpClient) { }

  apiUrl = 'https://football-prediction-api.p.rapidapi.com';

  GetFuturePredictions() {
    return this.http.get(this.apiUrl + '/api/v2/predictions', {
      headers: {
        "x-rapidapi-host": "football-prediction-api.p.rapidapi.com",
        "x-rapidapi-key": rapidApiKeys.apiKey
      }
    })
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      )
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `${error.statusText}. ${error.error.title}`;
    }
    return throwError(errorMessage);
  }
}
