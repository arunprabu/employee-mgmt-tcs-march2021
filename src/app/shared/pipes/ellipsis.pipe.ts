import { Pipe, PipeTransform } from '@angular/core';

// Decorator
@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  // Pipe will transform info
  // Learn about Rest Operator in ECMAScript 2015 -- Read 'understanding es6' book
  transform(value: string, ...args: any[]): string {
    console.log(value);
    console.log(args); 
    value = value.substr(0, args[0]);
    return value + '...';
  }

}
