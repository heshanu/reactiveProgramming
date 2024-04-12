import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrl: './rxjs-learning.component.css'
})
export class RxjsLearningComponent implements OnInit {

  ngOnInit(): void {
    this.agent$ = new Observable((sub) => {
      try {
        sub.next("Heshan");
      } catch (error) {
        sub.error(error);
      }
    });
    // throw new Error('Method not implemented.');
  }

  agent$!: Observable<string>;

}
