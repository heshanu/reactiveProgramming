import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterInterface } from '../../../modal/counter.interface';
import { Observable, Subscription } from 'rxjs';
import { getChannelName } from '../state/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent implements OnInit {

  counter!: number;
  counter$!: Observable<{ counter: number }>;

  addres$!: Observable<any[]>;

  channelName!: string;

  constructor(private store: Store<{ counter: counterInterface, username: counterInterface }>) { }

  ngOnInit(): void {
    this.counter$ = this.store.select("counter");
    this.store.select(getChannelName).subscribe(data => {
      console.log();
      this.channelName = data;
    })
      ;

  }



}
