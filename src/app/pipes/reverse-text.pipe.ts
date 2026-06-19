import { Pipe, PipeTransform } from "@angular/core";
import { truncate } from "fs";

@Pipe({
  name: 'reverseText',
  standalone: true
})

export class reverseTextPipe implements PipeTransform {
  transform(value: string): string {
    return(
      value.trim().split(' ').reverse().join(' ')
  )
  }
}