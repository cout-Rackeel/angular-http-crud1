import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from 'product';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private REST_API_SERVER = 'http://localhost:3000/products/';

  constructor( private httpClient : HttpClient) {}

  public sendGetRequest(){
    return this.httpClient.get<product[]>(this.REST_API_SERVER);
  }

  public getItem(id:number){
    return this.httpClient.get<product>(this.REST_API_SERVER + id);
  }

  public addItem(item:product){
   return this.httpClient.post<any>(this.REST_API_SERVER , item);
  }

  public delItem(id:number){
    return this.httpClient.delete<product>(this.REST_API_SERVER + id)
  }


}


