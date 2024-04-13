import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { CounterButtonComponent } from './comp/counter/counter-button/counter-button.component';
import { CounterOutputComponent } from './comp/counter/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './comp/counter/state/counter.reducer';
import { CustomCounterInputComponent } from './comp/counter/custom-counter-input/custom-counter-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RxjsLearningComponent,
    CounterButtonComponent,
    CounterOutputComponent,
    CustomCounterInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer, }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
