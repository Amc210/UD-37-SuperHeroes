import { Injectable } from '@angular/core';
import { Superheroes } from '../models/superheroes.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/superheroes';

@Injectable({
  providedIn: 'root'
})
export class SuperheroessService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Superheroes[]> {
    return this.http.get<Superheroes[]>(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Superheroes[]> {
    return this.http.get<Superheroes[]>(`${baseUrl}?name=${name}`);
  }
}
