import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue)
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
    });
  }
  
}
