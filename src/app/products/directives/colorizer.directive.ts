import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator 
@Directive({
  selector: '[appColorizer]' // Attribute Selector
})
export class ColorizerDirective {

  constructor( private elementRef: ElementRef, private renderer: Renderer2 ) {  // Dependency Injection
    console.log('Inside ColorizerDirective Constructor');

    console.log(this.elementRef.nativeElement);

    let el = this.elementRef.nativeElement;

    
    this.renderer.setStyle(el, 'background-color', 'red');
    this.renderer.setStyle(el, 'color', 'white');
    this.renderer.setStyle(el, 'height', '300px');
  }

  @HostListener('click', [ '$event.target'])
  clickHandler( element: any){
    console.log(element);
    this.renderer.setStyle(element, 'background-color', 'green');
  }

  @HostListener('mouseover', [ '$event.target'])
  mouseoverHandler(element: any){
    console.log(element);
    this.renderer.setStyle(element, 'background-color', 'yellow');
  }

  @HostListener('mouseleave', [ '$event.target'])
  mouseleaveHandler(element: any){
    console.log(element);
    this.renderer.setStyle(element, 'background-color', 'blue');
  }


  // Try @HostBinding() 
}
