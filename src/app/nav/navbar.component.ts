import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FavoritesService } from '../services/favorites.service'

@Component({
  selector:'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.scss']
})
export class NavBarComponent{
  title='Netlify'
  constructor(private router: Router, private favoritesService:FavoritesService){}

  go_to_film_list(){
    this.router.navigate(['/films'])
  }

  getNumberFavorites(){
    return this.favoritesService.getNumberFavorites()
  }
}
