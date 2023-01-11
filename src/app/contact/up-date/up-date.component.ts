import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/login';
@Component({
  selector: 'app-up-date',
  templateUrl: './up-date.component.html',
  styleUrls: ['./up-date.component.css']
})
export class UpDateComponent implements OnInit {
  userId?: any;
  citation?: string;
  auteur?: string;
  verif=true;
  submitted = false;
  /*
 formData:Login={
  auteur:'',
  citation:'',
 }
login?:Login;
 

 message = '';
*/
  constructor(private updateService:LoginService, private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    this.userId=this.route.snapshot.paramMap.get('id');
  }
  updateUser() {
    if(this.auteur !=''|| this.citation !='')
    {this.http.patch(`${baseUrl}/${this.userId}`, {
      citation: this.citation,
      auteur: this.auteur
    }).subscribe(() => {
      // Redirect to the user list page after the update is complete
   
    });
    this.submitted=true;
  }
    
  }

 
  /*
  ok(){
  
     this.verif=false;
   
  }
  upDate(){
    if(this.formData.auteur !=''|| this.formData.citation !='')
    {
     this.message=''; 
    this.updateService.update(this.login?._id,this.formData).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message ? res.message : 'This tutorial was updated successfully!';
      },
      error: (e) => console.error(e)
    });;
    this.submitted=true;}
      
    
    
  }
*/
}
