import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NameService } from '../service/name.service';

interface MyObject {
  name: string;
  id: number;
}

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrl: './rxjs-learning.component.css'
})
export class RxjsLearningComponent implements OnInit {

  // studentList = ['test0','test1','test2','test3','test4'];
  // student$: Observable<string[]> = of(this.studentList);




  myArray$!: Observable<MyObject[]>;

  constructor(private myService: NameService) { }

  ngOnInit() {
    this.myArray$ = this.myService.getMyObjects();
  }

}
