import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

interface Quote { _id: string; text: string; author: string; }

@Injectable({
  providedIn: 'root'
})

export class QuoteService {
  private apiUrl = 'http://localhost:5000/api/quotes/random';
  private http = inject(HttpClient);

  getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.apiUrl);
  }
}
