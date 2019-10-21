import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { FilmsListComponent } from './films/films-list.component'
import { FilmDetailsComponent } from './films/film-details/film-details.component'
import { FavoritesListComponent } from './favorites/favorites-list.component'
import { Error404Component } from './404/404.component'

import { FilmsService } from './services/films.service'
import { UrlService } from './services/urls.service'
import { FavoritesService } from './services/favorites.service'


import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FilmsListComponent,
    FilmDetailsComponent,
    Error404Component,
    FavoritesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    FilmsService,
    UrlService,
    FavoritesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
