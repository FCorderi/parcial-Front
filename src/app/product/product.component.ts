import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Product } from '../interface/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [IonicModule, RouterModule],
  standalone: true
})
export class ProductComponent  implements OnInit {
  @Input() product?: Product
  constructor() { }

  ngOnInit() {}

}
