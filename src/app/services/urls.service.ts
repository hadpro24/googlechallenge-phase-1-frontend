import { Injectable } from '@angular/core'

@Injectable()
export class UrlService{
  private BASE_URL: string = 'https://googlechallenge-harouna-api.herokuapp.com/api/v1/'
  private base_url_image:string = 'https://googlechallenge-harouna-api.herokuapp.com'

  get_base_url(){
    return this.BASE_URL
  }

  get_base_url_image(){
    return this.base_url_image
  }
}
