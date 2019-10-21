import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { UrlService } from '../services/urls.service'
import { FavoritesService } from '../services/favorites.service'

@Component({
  selector:'films-list',
  templateUrl:'./films-list.component.html',
  styleUrls:['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit{
  title = 'Netlify'
  public films:any
  public copieFilms:any
  isSearch:boolean = false
  isLoading:boolean = false
  timer:any

  constructor(private httpClient:HttpClient, private urlService: UrlService,
    private favoritesService:FavoritesService){}

  ngOnInit(){
    this.isLoading = true
    this.httpClient.get(this.urlService.get_base_url()+'films').subscribe(
      (response) => {
        this.films = response
        this.copieFilms = this.films
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

  onSearch(searchValue){
    clearTimeout(this.timer)
    this.timer = setTimeout(() =>{
      // check api
      if(!this.isSearch){
        this.copieFilms = this.films
        this.isSearch = true
      }
      if(!searchValue){
        this.films = this.copieFilms
      }else{
        this.isLoading = true
        this.httpClient.get(this.urlService.get_base_url()+'films?search='+searchValue).subscribe(
          (response) => {
            this.films = response
            this.isLoading = false
            if(this.films.not_found){
              this.films = null
            }
          },
          (error) => {
            console.log(error)
          },
        )
      }
    }, 1000)

  }

  makeFavorite(idFilm:string){
    this.favoritesService.addFavorite(idFilm)
  }
  removeFavorite(idFilm:string){
    this.favoritesService.removeFavorite(idFilm)
  }

}
