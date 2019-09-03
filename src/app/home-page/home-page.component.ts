import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() { }
  imgUrl = '/assets/andrey.jpg';

  buttonItems: Array<{}> = [
    {name: 'about'}, {name: 'experience'}, {name: 'skills'}
  ];

  ngOnInit() {}

}
