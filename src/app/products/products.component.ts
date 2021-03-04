import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  pageName = 'Product List!'; 

  subText = 'Add products into your cart and checkout!';

  productList: IProduct[] = [{
    id: 1,
    name: 'Apple',
    category: 'Fruits',
    price: '$2.76'
  }, {
    id: 2,
    name: 'Cheese',
    category: 'Dairy',
    price: '$6.38'
  }, {
    id: 3,
    name: 'Orange',
    category: 'Fruits',
    price: '$4.85'
  }, {
    id: 4,
    name: 'Tomato',
    category: 'Vegetables',
    price: '$5.01'
  }, {
    id: 5,
    name: 'Table Cloth',
    category: 'Kitchen Essentials',
    price: '$6.13'
  }, {
    id: 6,
    name: 'Cranberries - Frozen',
    category: 'Fruits',
    price: '$7.08'
  }];

  isLoggedIn = true;

  today: Date = new Date();

  randomText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

  constructor() { }

  ngOnInit(): void {
  }

  // event binding
  addToCartHandler(event: any){
    console.log(event);
    event.target.innerText = 'Added';
    alert('Added to Cart');

  }

  update(){
    this.subText = 'Arun';
  }



}
