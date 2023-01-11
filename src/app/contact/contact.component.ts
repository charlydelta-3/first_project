import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login.model';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:3000/login';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
 login?:Login[];
 
  constructor(private log:LoginService,private http: HttpClient) { }

  ngOnInit(): void {
    this.retrieveTutorials();
    this.http.get<Login[]>(baseUrl).subscribe(login => {
      this.login = login;
    });
   
  }
  retrieveTutorials(): void {
    this.log.getAll()
      .subscribe({
        next: (data) => {
          this.login = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
  likes(logins: Login) {
    this.http.patch(`${baseUrl}/${logins._id}`, { like: logins.like + 1 }).subscribe();
    logins.like++;
  }
}
