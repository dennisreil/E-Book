import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss'],
})
export class ChapterPage implements OnInit {
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
