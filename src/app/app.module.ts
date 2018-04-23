import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeLandingComponent } from './home/home.landing.component';

const routes: Routes = [
  { path: '', component: HomeLandingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeLandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
