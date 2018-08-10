import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../services/service1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  private numbers: number[];

  constructor(private service1: Service1Service) { }

  ngOnInit() {
    this.numbers = this.service1.getNumbers();
  }

  addNewNumber(): void {
    this.service1.addNewNumber();
    this.numbers = this.service1.getNumbers();
  }
}
