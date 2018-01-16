import { Component, OnInit } from '@angular/core';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  tiles = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'}

  ];
  constructor() { }

  ngOnInit() {
  }

  isScreenSmall(): boolean {
   // return this.mediaMatcher.matches;
   return false;
  }


}
