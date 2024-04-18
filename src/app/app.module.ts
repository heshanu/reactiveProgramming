import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { CountComponent } from './comp/counter/count/count.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../src/envirnments/envirnment';
import { appReducer } from './store/app.status';

import { RouterOutlet } from "@angular/router";
import { CounterModule } from './module/counter/counter.module';
import { PostsModule } from './module/posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    RxjsLearningComponent,
    HomeComponent,
    HeaderComponent,
    CountComponent,
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
    CounterModule,
    PostsModule,
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    RouterOutlet
  ]
})
export class AppModule { }
