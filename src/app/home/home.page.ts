import { Component, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProductComponent } from "../product/product.component";
import { ProductsService } from '../services/products.service';
import { Product } from '../interface/product';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonicModule, ProductComponent, CommonModule]
})
export class HomePage {
  products: Product[] = [];
  
  constructor(private productsService: ProductsService) {
    this.productsService.getProducts().then((data) => {
      this.products = data;
    });
  }


}

