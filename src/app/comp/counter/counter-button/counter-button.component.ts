import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { counterInterface } from '../../../modal/counter.interface';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {
  constructor(private store: Store<{ counter: counterInterface }>) { }

  onIncreament(): void {
    this.store.dispatch(increment());
  }

  onDecreament(): void {
    this.store.dispatch(decrement());
  }

  onReset(): void {
    this.store.dispatch(reset());
  }


}
