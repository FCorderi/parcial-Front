import { Injectable } from '@angular/core';
import { Product } from '../interface/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'http://localhost:8000';


  constructor() { }

  async getProducts(): Promise<Product[]> {
    return (await (await fetch(`${this.url}/products`)).json()) ?? [];
  }
  
  async getProductDetail(id: number): Promise<Product> {
    return (await (await fetch(`${this.url}/products/${id}`)).json()) ?? [];
  }
}
