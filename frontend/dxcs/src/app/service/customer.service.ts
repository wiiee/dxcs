import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../entity/customer';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.host}/api/customer/getAll`);
  }

  save(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${environment.host}/api/customer/save`, customer);
  }
}