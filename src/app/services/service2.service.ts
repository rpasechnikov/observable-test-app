import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {
  private readonly alphabet: string[];
  private letters: string[];

  private subject: BehaviorSubject<string[]>;

  constructor() {
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
      , 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    this.letters = ['a', 'b', 'c', 'd', 'e'];

    this.subject = new BehaviorSubject(this.letters);
  }

  public getLetters(): Observable<string[]> {
    return this.subject.asObservable();
  }

  public addNewLetter(): void {
    this.letters.push(this.alphabet[this.letters.length]);
    this.subject.next(this.letters); 
  }
}
