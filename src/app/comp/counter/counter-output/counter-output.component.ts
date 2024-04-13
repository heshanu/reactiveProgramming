import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterInterface } from '../../../modal/counter.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit {

  counter!: number;
  counter$!: Observable<{ counter: number }>;

  constructor(private store: Store<{ counter: counterInterface, username: counterInterface }>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select("counter");
  }



}
