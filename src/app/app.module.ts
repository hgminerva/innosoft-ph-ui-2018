// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// component
import { AppComponent } from './app.component';
import { HomeLandingComponent } from './home/home.landing.component';
import { LoginComponent } from './login/login.component';

// service
import { LoginService } from './login/login.service'

// route
const routes: Routes = [
  { path: '', component: HomeLandingComponent },
  { path: 'account/login', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeLandingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
