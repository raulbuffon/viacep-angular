import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  baseUrl = 'https://viacep.com.br/ws/';
  finalBaseUrl = '/json/';

  constructor(private http: HttpClient) {

  }

  getCep(url: string) {
    return this.http.get(this.baseUrl + url + this.finalBaseUrl);
  }
}
