import { Component, OnInit } from '@angular/core';
import {Details} from 'src/app/models/details.model';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';


@Component({
  selector: 'app-auteurs',
  templateUrl: './auteurs.component.html',
  styleUrls: ['./auteurs.component.css']
})
export class AuteursComponent implements OnInit {

  
    details?: Details[];
    citations?: Tutorial[];
    currentTutorial: Tutorial = {};
    currentIndex = -1;
     auteur= '';
  
    constructor(private tutorialService: TutorialService) { }
  
    ngOnInit(): void {
      this.retrieveTutorials();
    }
  
    retrieveTutorials(): void {
      this.tutorialService.getAll()
        .subscribe({
          next: (data) => {
            this.citations = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }
  
   /* refreshList(): void {
      this.retrieveTutorials();
      this.currentTutorial = {};
      this.currentIndex = -1;
    }
  
    setActiveTutorial(tutorial: Tutorial, index: number): void {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    }
  
    removeAllTutorials(): void {
      this.tutorialService.deleteAll()
        .subscribe({
          next: (res) => {
            console.log(res);
            this.refreshList();
          },
          error: (e) => console.error(e)
        });
    }
  
    searchTitle(): void {
      this.currentTutorial = {};
      this.currentIndex = -1;
  
      this.tutorialService.findByTitle(this.auteur)
        .subscribe({
          next: (data) => {
            this.citations = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }
  */
  }
