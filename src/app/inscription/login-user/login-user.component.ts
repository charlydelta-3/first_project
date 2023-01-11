import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/models/users.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  users?:Users[];
  public Register = {
    username:'',
    citation: '',
     auteur: '',
    like:0,
    };
    
    verif=true;
    submitted = false;
    username?:'';
  constructor(private userService: UserService,private login :LoginService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }
  SendData(){
    if(this.Register.auteur!=''&& this.Register.citation !='' )
    {
      console.log(this.Register);
    this.login.create(this.Register);
    this.submitted=true;
    
    }
   }
  retrieveTutorials(): void {
    this.userService.getAll()
      .subscribe({
        next: (data) => {
          this.users = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });

}
Information(){
  if(this.Register.citation==''|| this.Register.auteur ==''){
   this.verif=false;
  }
 }
 ok(){
  this.verif=true;
 }
 newTutorial(): void {
  this.submitted = false;
   
   this.Register.auteur='';
   this.Register.citation='';
}
 
}

