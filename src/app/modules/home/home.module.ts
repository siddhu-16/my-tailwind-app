import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { HeroComponent } from './components/hero/hero.component';
import { CardsComponent } from './components/cards/cards.component';
import { CoursesComponent } from './components/courses/courses.component';
import { NewComponent } from './components/new/new.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    CardsComponent,
    CoursesComponent,
    NewComponent,
    NavComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    
  ]
})
export class HomeModule { }
