import { Component, signal } from '@angular/core';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { wordCount } from '../pipes/word-count.pipe';

interface Quote { text: string; author: string; }

@Component({
	selector: 'app-quote',
	imports: [HoverHighlightDirective, wordCount],
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.css'],
	standalone: true
})
export class QuoteComponent {
	private quotes: Quote[] = [
		{ text: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
		{ text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
		{ text: 'Stay hungry. Stay foolish.', author: 'Steve Jobs' }
	];
	private index = 0;
	current = signal<Quote>(this.quotes[this.index]);

	nextQuote() {
		this.index = (this.index + 1) % this.quotes.length;
		this.current.set(this.quotes[this.index]);
	}
}
