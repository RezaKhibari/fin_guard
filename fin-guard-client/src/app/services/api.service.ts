import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost/fin_guard/api'; // Backend URL

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/read.php`);
  }

  getTransactions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/transactions/read.php`);
  }
}
