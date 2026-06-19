import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount',
  standalone: true
})

export class wordCountPipe implements PipeTransform {
  transform(value: string): number { 
    return value.split(' ').length;
   }
}