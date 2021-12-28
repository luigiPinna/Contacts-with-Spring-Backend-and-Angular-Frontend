import { DateInterface } from './../../models/dateAPI';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateAPIService {

  private currentTimeURL = "https://api.ipgeolocation.io/timezone?";
  private timeApiKey = "96ca220c68434606890da54514409595";
  private location = "&tz=Europe/Rome";

  constructor(private http: HttpClient) { }

  //funzione che richiama orario e data attuale
  getCurrentDate() {
    return this.http.get<DateInterface>(this.currentTimeURL + "apiKey=" + this.timeApiKey + this.location);
  }
  //https://api.ipgeolocation.io/timezone?apiKey=API_KEY&tz=America/Los_Angeles
}
