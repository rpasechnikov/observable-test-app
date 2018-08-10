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
    this.service2.getLetters()
      .subscribe(letters => 
        {
          // This is not hit on load.. only once addNewLetter has been called
          this.letters = letters
        });
  }

  addNewLetter(): void {
    this.service2.addNewLetter();

    // This isn't right surely... this subscription should only happen once. Adding new 
    // letters should trigger an automatic update?
    // this.service2.getLetters()
    //   .subscribe(letters => this.letters = letters);
  }
}
