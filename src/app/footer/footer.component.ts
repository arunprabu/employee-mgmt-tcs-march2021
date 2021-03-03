import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer', 
  template: `
    <footer class='text-center'>
      <hr>
      <p class="greyText">Copyright 2021</p>
    </footer>
  `,
  styles: [
    `
    .greyText{
      color: grey;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
