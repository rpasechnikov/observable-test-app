import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {
  private readonly alphabet: string[];
  private letters: string[];

  private subject: Subject<string[]> = new Subject<string[]>();

  constructor() {
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
      , 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    this.letters = ['a', 'b', 'c', 'd', 'e'];

    // Does not seem to trigger...
    this.subject.next(this.letters);
  }

  public getLetters(): Observable<string[]> {
    var observable = this.subject.asObservable();

    // Does not seem to trigger...
    this.subject.next(this.letters);
    return observable;
  }

  public addNewLetter(): void {
    this.letters.push(this.alphabet[this.letters.length]);
    this.subject.next(this.letters); 
  }
}
