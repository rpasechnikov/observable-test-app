import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {
  private readonly alphabet: string[];
  private letters: string[];

  constructor() {
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
      , 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    this.letters = ['a', 'b', 'c', 'd', 'e'];
  }

  public getLetters(): string[] {
    return this.letters;
  }

  public addNewLetter(): void {
    this.letters.push(this.alphabet[this.letters.length]);
  }
}
