import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductModel } from './product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products")
    
    
  }
  newProduct(item:any){
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe((data)=>{console.log(data)})
  }
}
