import { Injectable } from '@angular/core'

@Injectable()
export class FavoritesService{
    allFavoriteFilmsIds:string[]

    getFavorites(){
      return JSON.parse(sessionStorage.getItem('filmsFavorite'))
    }

    getNumberFavorites(){
      return JSON.parse(sessionStorage.getItem('filmsFavorite')).length
    }

    addFavorite(idFilm){
      if(sessionStorage.getItem('filmsFavorite')){
        this.allFavoriteFilmsIds =  JSON.parse(sessionStorage.getItem('filmsFavorite'))
      }
      if(!this.allFavoriteFilmsIds.includes(idFilm)){
          this.allFavoriteFilmsIds.push(idFilm)
      }
      sessionStorage.setItem('filmsFavorite', JSON.stringify(this.allFavoriteFilmsIds))
    }

    removeFavorite(idFilm){
      if(sessionStorage.getItem('filmsFavorite')){
        this.allFavoriteFilmsIds =  JSON.parse(sessionStorage.getItem('filmsFavorite'))
      }
      this.allFavoriteFilmsIds = this.allFavoriteFilmsIds.filter((item)=>item != idFilm)
      sessionStorage.setItem('filmsFavorite', JSON.stringify(this.allFavoriteFilmsIds))
    }

    inFavoriteFilms(idFilm){
      let ids = JSON.parse(sessionStorage.getItem('filmsFavorite'))
      return ids.includes(idFilm)
    }
}
