import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getListFruit() {
    let url = 'https://www.fruityvice.com/api/fruit/all';
    let headers = {
      'Content-Type':  'application/json',
    }

    return this.httpClient.get(url, { headers: headers })
  }
}
