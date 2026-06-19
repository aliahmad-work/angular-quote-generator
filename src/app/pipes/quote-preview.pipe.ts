import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'quotePreview',
    standalone: true
  })

export class quotePreviewPipe implements PipeTransform {
  transform(value: string): string {
    const words = value.split(' ')
    return (
      words.slice(1, 3).join(' ')
    )
  }
}