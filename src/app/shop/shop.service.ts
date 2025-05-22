import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagnation } from '../shared/Models/Pagnation';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseURl ='https://localhost:44331/api/';
  constructor(private http:HttpClient) { }

   getProduct(){
      return this.http.get<IPagnation[]>(this.baseURl+"Products/get-all");
    }
}
