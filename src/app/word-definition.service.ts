import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordDefinitionService {
  private baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(private http: HttpClient) { }

  fetchWordDefinition(word: string): Observable<any> {
    const url = `${this.baseUrl}${word}`;
    return this.http.get(url);
  }
}
