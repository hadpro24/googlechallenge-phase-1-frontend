import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { FilmsListComponent } from './films/films-list.component'
import { FilmDetailsComponent } from './films/film-details/film-details.component'
import { FavoritesListComponent } from './favorites/favorites-list.component'
import { Error404Component } from './404/404.component'


const routes:Routes = [
  {path:'', pathMatch:'full', redirectTo:'films'},
  {path:'films', component:FilmsListComponent},
  {path:'films/favorites', component:FavoritesListComponent},
  {path:'films/:id', component:FilmDetailsComponent},
  {path:'page-not-found', component: Error404Component},
  {path:'**', redirectTo:'page-not-found'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule {}
