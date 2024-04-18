import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { COUNTER_STATE_NAME } from './state/counter.selectors';

@NgModule({
  declarations: [
    CustomCounterInputComponent,
    CounterButtonComponent,
    CounterOutputComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)
  ],
  exports: [
    CustomCounterInputComponent,
    CounterButtonComponent,
    CounterOutputComponent
  ]
})
export class CounterModule { }
