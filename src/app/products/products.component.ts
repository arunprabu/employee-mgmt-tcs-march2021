import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit{

  pageName = 'Product List!'; 

  subText = 'Add products into your cart and checkout!';

  productList: IProduct[] = [];

  isLoggedIn = true;

  today: Date = new Date();

  randomText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

  constructor( private productService: ProductService ) {  // 1. connect with the service using dep injection
    console.log('INSIDE CONSTRUCTOR');
  }

  // lifecycle hook
  ngOnInit(): void {
    // will be called automatically after constructor
    // whenever this comp is coming into the view -- ngOnInit will be called.
    // ideal place for us to send ajax calls
    console.log('INSIDE ngOnInit');

    // Demo for Assignment #1
    // 2. send the req to the service 
    // this.productList = this.productService.getProducts(); // 3. get the res/data from the service

    // Demo for Assignment #2
    // 2. send the req to the service 
    this.productService.getProductList()
      .subscribe( (res: IProduct[]) => { // 3. get the res from the service
        console.log(res);
        this.productList  = res;
      });
      
    
  }

  // event binding
  addToCartHandler(event: any){
    console.log(event);
    event.target.innerText = 'Added';
    alert('Added to Cart');

  }


}
