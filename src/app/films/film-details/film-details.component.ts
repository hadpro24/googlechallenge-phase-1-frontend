import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { UrlService } from '../../services/urls.service'

@Component({
  selector:'film-details',
  templateUrl:'./film-details.component.html',
  styleUrls:['./film-details.component.scss']
})

export class FilmDetailsComponent implements OnInit{
  private id_film:number
  public film:any
  public isLoading:boolean = false


  constructor(private route: ActivatedRoute, private httpClient: HttpClient,
    private urlService:UrlService){}

  ngOnInit(){
    this.id_film = this.route.snapshot.params['id']
    //loading start
    this.isLoading = true
    this.httpClient.get(this.urlService.get_base_url()+'films/'+this.id_film).subscribe(
      (response) => {
        console.log(response)
        this.film = response
        this.isLoading = false
      },
      (error) => {
        console.log(error)
      },

    )
  }

  get_image_path(image_sort_url){
    return this.urlService.get_base_url_image() + image_sort_url
  }
}
