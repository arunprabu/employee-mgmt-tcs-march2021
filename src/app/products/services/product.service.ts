import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { IProduct } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) {  // Dependency Injection

  }

  // Demo for Assignment #1
  getProducts(): IProduct[] { // 1. get the req from the comp 
    console.log('INSIDE Product Service');

    const products: IProduct[] = [
      {
        id: 1,
        name: 'Apples',
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
      }
    ];

    return products; // 2. sending the static data to the comp.
  }

  getProductList(): Observable<any[]>{ // 1. get the req from the comp 
    console.log('INSIDE getProductList');
    // 2. send the req to the REST API 
    // 2.1 What's the REST API URL? http://jsonplaceholder.typicode.com/users
    // 2.2 What's the Http Method? GET
    // 2.3 What's the REST API Client? HttpClient
    return this.http.get("http://localhost:3000/products")
      .pipe( map( (res: any) => { // 3. get the res from the REST API
        console.log(res); 
        // sort, filter, removing, adding
        return res; // 4. send the res back to the comp 
      }));
  }
  

  
  


}
