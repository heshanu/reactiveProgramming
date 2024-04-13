import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';
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

  studentList = ['test0', 'test1', 'test2', 'test3', 'test4'];
  student$: Observable<string[]> = of(this.studentList);

  //from 
  studentObject: MyObject = {
    id: 1, name: "heshan"
  };

  orderName!: string;

  order$: Observable<string> = from(['Heshan', 'Umayanga']);

  myArray$!: Observable<MyObject[]>;

  constructor(private myService: NameService) { }

  ngOnInit() {
    this.order$.subscribe((data) => {
      this.orderName = data;
      //console.log(data);
    })

    this.student$.subscribe((data => {
      console.log(data);

    }))

    // this.myArray$ = this.myService.getMyObjects();
  }

}
