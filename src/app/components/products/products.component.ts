import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    })
  }

  addProduct() {
    this.productService.addProduct('Test product', 'hello this is a test product', 10);
  }

  deletePrtoduct() {
    this.productService.deleteProduct('hCudkxyqJ4Rn83EQvfqQ');
  }

}
