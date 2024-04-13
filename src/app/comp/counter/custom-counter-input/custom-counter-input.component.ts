import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterInterface } from '../../../modal/counter.interface';
import { customDecreament, customIncreament } from '../state/counter.action';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css'
})
export class CustomCounterInputComponent implements OnInit {
  val!: number;

  constructor(private store: Store<{ counter: counterInterface }>) { }

  ngOnInit(): void {


  }
  onDelete() {
    this.store.dispatch(customDecreament({ count: +this.val }))
  }

  onAdd() {
    //+ convert to number
    this.store.dispatch(customIncreament({ count: +this.val }));
    console.log(this.val);
  }

}

