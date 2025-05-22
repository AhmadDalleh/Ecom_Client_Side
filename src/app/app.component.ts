import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/Models/Product';
import { IPagnation } from './shared/Models/Pagnation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit {
  constructor(private http:HttpClient){}
  baseURl ='https://localhost:44331/api/Products/get-all';
  Product:IProduct[];


  getProduct(){
    return this.http.get(this.baseURl).subscribe({
      next:((value:IPagnation)=>{
        this.Product = value.data;
        console.log(value.data);
      }),
    });
  }

  ngOnInit(): void {
    this.getProduct();
  } 
  
  title = 'client';
}

