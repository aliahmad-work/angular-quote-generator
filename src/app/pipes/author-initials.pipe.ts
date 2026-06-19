import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'authorInitials',
  standalone: true
})

export class authorInitialsPipe implements PipeTransform {
  transform(value: string): string {
    return (
      value.split(' ').map( word=> word.charAt(0).toUpperCase()).join('')
    )
  }
}