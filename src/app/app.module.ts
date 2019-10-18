import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { MembersComponent} from './components/members/members.component';
import { HeaderComponent } from './components/header/header.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';

/**
 * Configure lazy-load child routes.
 */
const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    MembersComponent,
    MemberDetailComponent
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
