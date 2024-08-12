import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  myApps = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G'
  ]
  ngOnInit(): void {
  }

}
