import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductDetailPage implements OnInit {

  product?: Product;
  
  constructor(private route: ActivatedRoute, private productsService: ProductsService) {
    let id = this.route.snapshot.paramMap.get('id');

    this.productsService.getProductDetail(parseInt(id ?? "") || 0).then((data) => {
      this.product = data;
    });
  }

  ngOnInit() {
  }

}
