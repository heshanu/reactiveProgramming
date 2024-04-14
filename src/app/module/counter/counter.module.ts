import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';

@NgModule({
  declarations: [
    CounterComponent,
    CustomCounterInputComponent,
    CounterButtonComponent,
    CounterOutputComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule, ReactiveFormsModule, FormsModule
  ]
})
export class CounterModule { }
