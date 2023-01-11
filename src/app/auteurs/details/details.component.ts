import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Details} from 'src/app/models/details.model';
import { DetailsService } from 'src/app/services/details.service';
import { HttpClient } from '@angular/common/http';
import { Idetails } from 'src/app/models/details.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details?: Details ;
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  det?: Details[];
 
  constructor(
    private detailService:DetailsService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
     this.getDetails();

     
      }
      
      getDetails():void{
        const id=this.route.snapshot.paramMap.get('id');
        this.detailService.getById(id).subscribe(details => this.details=details);
       
      }
      likeCount = 0;

  like() {
    this.likeCount++;
  }
     
 }
 
//=>
