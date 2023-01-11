import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { Details } from '../models/details.model';
const baseUrl = 'http://localhost:3000/auteurs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Details[]> {
    return this.http.get<Details[]>(baseUrl);
  }

  getById(id: any): Observable<Details> {
    return this.http.get(`${baseUrl}/${id}`);
  }
/*
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

  findByTitle(auteur: any): Observable<Tutorial[]> {
    return this.http.get<Details[]>(`${baseUrl}?auteur=${auteur}`);
  }*/
}