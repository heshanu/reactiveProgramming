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
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PostListComponent } from './posts/post-list/PostListComponent';
import { CountComponent } from './count/count.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../src/envirnments/envirnment';
import { appReducer } from './store/app.status';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { RouterOutlet } from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    RxjsLearningComponent,
    CounterButtonComponent,
    CounterOutputComponent,
    CustomCounterInputComponent,
    HomeComponent,
    HeaderComponent,
    PostListComponent,
    CountComponent,
    AddPostComponent
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    ReactiveFormsModule,
    FormsModule,
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    RouterOutlet
  ]
})
export class AppModule { }
