import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { Routes, RouterModule } from '@angular/router';

/**
 * Configure lazy-load child routes.
 */
const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
