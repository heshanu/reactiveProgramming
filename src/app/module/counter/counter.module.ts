import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter.component';

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
    FormsModule
  ],
  exports: [
    CustomCounterInputComponent,
    CounterButtonComponent,
    CounterOutputComponent
  ]
})
export class CounterModule { }
