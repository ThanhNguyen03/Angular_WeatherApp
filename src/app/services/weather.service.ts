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
    const apiBaseUrl = environment.production ? process.env['WEATHER_API_BASE_URL'] : environment.weatherApiBaseUrl;
    const apiKeyHeaderName = environment.production ? process.env['XRapidAPIKeyHeaderName'] : environment.XRapidAPIKeyHeaderName;
    const apiKeyHeaderValue = environment.production ? process.env['XRapidAPIKeyHeaderValue'] : environment.XRapidAPIKeyHeaderValue;
    const apiHostHeaderName = environment.production ? process.env['XRapidAPIHostHeaderName'] : environment.XRapidAPIHostHeaderName;
    const apiHostHeaderValue = environment.production ? process.env['XRapidAPIHostHeaderValue'] : environment.XRapidAPIHostHeaderValue;

    return this.http.get<WeatherData>(apiBaseUrl, {
      headers: new HttpHeaders()
        .set(apiKeyHeaderName, apiKeyHeaderValue)
        .set(apiHostHeaderName, apiHostHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
    });
  }

}
