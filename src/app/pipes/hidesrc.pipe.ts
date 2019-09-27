import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidesrc'
})
export class HidesrcPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
      return value.split('').map( (x)=> "*" ).join('');
  }

}
