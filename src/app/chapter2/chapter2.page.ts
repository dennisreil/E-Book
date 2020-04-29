import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter2',
  templateUrl: './chapter2.page.html',
  styleUrls: ['./chapter2.page.scss'],
})
export class Chapter2Page implements OnInit {
  public pages = [
    {
      title: "Pg.1",
      url: "page1"
    },
    {
      title: "Pg.2",
      url: "page2"
    },
    {
      title: "Pg.3",
      url: "page3"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
