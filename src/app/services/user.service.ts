 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
 import { Users } from '../models/users.model';

 const baseUrl = 'http://localhost:3000/utilisateurs';

 @Injectable({
   providedIn: 'root'
 })
 export class UserService {

   constructor(private http: HttpClient) { }

   getAll(): Observable<Users[]> {
     return this.http.get<Users[]>(baseUrl);
   }

   get(id: any): Observable<Users> {
     return this.http.get(`${baseUrl}/${id}`);
   }

   create(data: any) {
     console.log(data)
     return this.http.post(baseUrl, data).subscribe(res => {
       console.log(res)
     });
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

   findByTitle(username: any): Observable<Users[]> {
     return this.http.get<Users[]>(`${baseUrl}?username=${username}`);
   }
 }


