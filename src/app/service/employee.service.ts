import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../domain/employee';
import { Page } from '../domain/page';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private host: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  findAll(pageNumber?: number, pageSize?: number): Observable<Page> {
    return this.http.get<Page>(`${this.host}/api/v1/employees?pageNum=${pageNumber}&pageSize=${pageSize}`);
  }

  get(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.host}/api/v1/employees/${id}`);
  }

  save(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.host}/api/v1/employees`, employee);
  }

  update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.host}/api/v1/employees`, employee);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.host}/api/v1/employees/${id}`);
  }
}
