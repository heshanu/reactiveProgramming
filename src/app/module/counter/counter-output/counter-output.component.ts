import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterInterface } from '../../../modal/counter.interface';
import { Observable, Subscription } from 'rxjs';
import { getChannelName, getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit {

  counter$!: Observable<number>;
  channelName$!: Observable<string>;
  constructor(private store: Store<{ counter: counterInterface }>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
    this.channelName$ = this.store.select(getChannelName);
  }

}
