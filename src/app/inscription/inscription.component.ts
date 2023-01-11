import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from '../models/users.model';
import { UserService } from '../services/user.service';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
 

   public Register = {
    nom_user: '',
     pnom_user: '',
    
     username:''
   };
   verif=true;
   submitted = false;
  constructor(private userServices: UserService) { }

  ngOnInit(): void {
  }
  
   SendData(){
    if(this.Register.nom_user!=''&& this.Register.pnom_user !=''&& this.Register.username !='')
    {
      console.log(this.Register);
    this.userServices.create(this.Register);
    this.submitted=true;
    
    }
   }
   Information(){
    if(this.Register.nom_user==''|| this.Register.pnom_user ==''|| this.Register.username ==''){
     this.verif=false;
    }
   }
   ok(){
    this.verif=true;
   }
   newTutorial(): void {
    this.submitted = false;
     this.Register = {
      nom_user: '',
       pnom_user: '',
       
       username:''
     };
  }
    }