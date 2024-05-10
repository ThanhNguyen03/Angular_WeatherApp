import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherApiBaseUrl: string = environment.weatherApiBaseUrl;
  private XRapidAPIKeyHeaderName: string = environment.XRapidAPIKeyHeaderName;
  private XRapidAPIKeyHeaderValue: string = environment.XRapidAPIKeyHeaderValue;
  private XRapidAPIHostHeaderName: string = environment.XRapidAPIHostHeaderName;
  private XRapidAPIHostHeaderValue: string = environment.XRapidAPIHostHeaderValue;

  constructor(private http:HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(this.XRapidAPIKeyHeaderName, this.XRapidAPIKeyHeaderValue)
        .set(this.XRapidAPIHostHeaderName, this.XRapidAPIHostHeaderValue),
      params: new HttpParams()
        .set('q', cityName)
    });
  }
}