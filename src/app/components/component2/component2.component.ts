import { Component, OnInit } from '@angular/core';
import { Service2Service } from '../../services/service2.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  private letters: string[];

  constructor(private service2: Service2Service) { }

  ngOnInit() {
    this.letters = this.service2.getLetters();
    console.log(this.letters);
  }

  addNewLetter(): void {
    this.service2.addNewLetter();
    this.letters = this.service2.getLetters();
  }
}
