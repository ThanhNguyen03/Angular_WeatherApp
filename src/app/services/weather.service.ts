import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const apiBaseUrl = process.env['WEATHER_API_BASE_URL'];
    const apiKeyHeaderName = process.env['XRapidAPIKeyHeaderName'];
    const apiKeyHeaderValue = process.env['XRapidAPIKeyHeaderValue'];
    const apiHostHeaderName = process.env['XRapidAPIHostHeaderName'];
    const apiHostHeaderValue = process.env['XRapidAPIHostHeaderValue'];

    return this.http.get<WeatherData>(apiBaseUrl, {
      headers: new HttpHeaders()
        .set(apiKeyHeaderName, apiKeyHeaderValue)
        .set(apiHostHeaderName, apiHostHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
    });
  }

}
