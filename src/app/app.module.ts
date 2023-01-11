import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AuteursComponent } from './auteurs/auteurs.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './auteurs/details/details.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginUserComponent } from './inscription/login-user/login-user.component';
import {MatSelectModule} from '@angular/material/select';
import { UpDateComponent } from './contact/up-date/up-date.component';
const AppRoute:Routes=[
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  {path:'accueil',component:HomeComponent},
  {path:'propositions',component:ContactComponent},
  {path:'propositions/:id',component:UpDateComponent},
  {path:'auteurs',component:AuteursComponent},
  {path:'auteurs/:id',component:DetailsComponent} ,
  {path:'inscription',component:InscriptionComponent},
  {path:'login',component:LoginUserComponent},
  
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuteursComponent,
    ContactComponent,
    DetailsComponent,
    InscriptionComponent,
    LoginUserComponent,
    UpDateComponent
    
  
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoute),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }