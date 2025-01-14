import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selectedOption: string | null = null;

  selectOption(option: string): void {
    this.selectedOption = option;
    console.log(`Wybrano opcję: ${option}`);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
