import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { UrlService } from '../services/urls.service'
import { FavoritesService } from '../services/favorites.service'

@Component({
  selector:'favorites-list',
  templateUrl:'./favorites-list.component.html',
  styleUrls:['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit{
  isLoading:boolean = false
  filmsFavorite:any = null
  constructor(private httpClient:HttpClient, private urlService: UrlService,
    private favoritesService:FavoritesService){}

  ngOnInit(){
    this.isLoading = true

    this.httpClient.get(
      // fetch api to get all films has this: e.g: /films?favorites=1,2,3
      this.urlService.get_base_url()+'films/favorites?ids='+this.favoritesService.getFavorites().join(',')
    ).subscribe(
      (response) => {
        let data = response
        if(!data['not_found']){
          this.filmsFavorite = response
        }
        console.log(this.filmsFavorite)
        this.isLoading = false
      },
      (error) => {
        console.log(error)
      },
    )
  }

  get_image_path(imageShortUrl){
    return this.urlService.get_base_url_image()+imageShortUrl
  }
  isInFavoriteFilms(filmId){
    return this.favoritesService.inFavoriteFilms(filmId)
  }

  makeFavorite(idFilm:string){
    this.favoritesService.addFavorite(idFilm)
  }
  removeFavorite(idFilm:string){
    this.favoritesService.removeFavorite(idFilm)
    //remove to list
    this.filmsFavorite = this.filmsFavorite.filter((item) => item.id != idFilm)
  }

}
