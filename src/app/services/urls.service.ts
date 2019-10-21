import { Injectable } from '@angular/core'

@Injectable()
export class UrlService{
  private BASE_URL: string = 'http://localhost:8000/api/v1/'
  private base_url_image:string = 'http://localhost:8000'

  get_base_url(){
    return this.BASE_URL
  }

  get_base_url_image(){
    return this.base_url_image
  }
}
