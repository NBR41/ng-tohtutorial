import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent }     from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';


@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
          { path: 'heroes', component: HeroesComponent },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'detail/:id', component: HeroDetailComponent },

      ])
  ],
  declarations: [
      AppComponent,
      HeroesComponent,
      HeroDetailComponent,
      DashboardComponent
  ],
  providers: [
      HeroService
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
