import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class FilmsService{
    private BASE_URL: string = 'http://localhost:8000/api/v1/'
    public base_url_image:string = 'http://localhost:800'
    private films:any
    constructor(private httpClient:HttpClient){}

    list_films(){
      this.httpClient.get(this.BASE_URL+'films').subscribe(
        (response) => {
          this.films = response
          console.log(this.films)
        },
        (error) => {
          console.log(error)
        },
      )
    }

    get_film(id:number){
      return this.films.filter(film => film.id == id)
    }
}
