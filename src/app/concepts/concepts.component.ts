import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  gotoHomeHandler(){
    console.log('About to go to Home Page!');
    // redirect the user to home page thru program
    this.router.navigate(['/']);
  }

}
