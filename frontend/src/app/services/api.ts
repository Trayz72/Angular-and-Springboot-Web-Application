import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {

  private http = inject(HttpClient);
  private baseUrl = '';

  getHello() {
    return this.http.get(this.baseUrl + '/hello', {
      responseType: 'text'
    });
  }
}

