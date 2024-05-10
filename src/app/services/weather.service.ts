import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherApiBaseUrl: string;
  private XRapidAPIKeyHeaderName: string;
  private XRapidAPIKeyHeaderValue: string;
  private XRapidAPIHostHeaderName: string;
  private XRapidAPIHostHeaderValue: string;

  constructor(private http: HttpClient) { 
    // Kiểm tra xem biến môi trường weatherApiBaseUrl có được định nghĩa không
    this.weatherApiBaseUrl = process.env['weatherApiBaseUrl'] || environment.weatherApiBaseUrl;
    this.XRapidAPIKeyHeaderName = process.env['XRapidAPIKeyHeaderName'] || environment.XRapidAPIKeyHeaderName;
    this.XRapidAPIKeyHeaderValue = process.env['XRapidAPIKeyHeaderValue'] || environment.XRapidAPIKeyHeaderValue;
    this.XRapidAPIHostHeaderName = process.env['XRapidAPIHostHeaderName'] || environment.XRapidAPIHostHeaderName;
    this.XRapidAPIHostHeaderValue = process.env['XRapidAPIHostHeaderValue'] || environment.XRapidAPIHostHeaderValue;
  }

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
