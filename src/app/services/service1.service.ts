import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  private numbers: number[];

  constructor() {
    this.numbers = [1, 2, 3, 4, 5];
  }

  public getNumbers(): number[] {
    return this.numbers;
  }

  public addNewNumber(): void {
    this.numbers.push(this.numbers[this.numbers.length - 1] + 1);
  }
}
