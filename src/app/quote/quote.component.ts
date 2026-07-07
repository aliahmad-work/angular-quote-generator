import { Component, OnInit, signal } from '@angular/core';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { wordCountPipe } from '../pipes/word-count.pipe';
import { authorInitialsPipe } from '../pipes/author-initials.pipe';
import { quotePreviewPipe } from '../pipes/quote-preview.pipe';
import { reverseTextPipe } from '../pipes/reverse-text.pipe';
import { QuoteService } from '../services/quote.services';

interface Quote { _id: string; text: string; author: string; }

@Component({
  selector: 'app-quote',
  imports: [HoverHighlightDirective, wordCountPipe, authorInitialsPipe, quotePreviewPipe, reverseTextPipe],
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  standalone: true
})
export class QuoteComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }
  current = signal<Quote>({ _id: '', text: '', author: '' });

  ngOnInit(): void {
    this.loadRandomQuote();
  }

  loadRandomQuote() {
    this.quoteService.getRandomQuote().subscribe({
      next: quote => this.current.set({ _id: quote._id, text: quote.text, author: quote.author }),
      error: err => console.error('Failed to load quote', err)
    });
  }

  nextQuote() {
    this.loadRandomQuote();
  }

}

