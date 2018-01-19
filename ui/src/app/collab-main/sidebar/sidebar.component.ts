import { Component, OnInit, Input } from "@angular/core";
import { MainContentComponent } from "../main-content/main-content.component";
import { FormGroup, FormControl } from "@angular/forms";

import { CollabService } from '../services/collab.service';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  tiles = [
    { text: "One", cols: 2, rows: 1, color: "lightblue" },
    { text: "Two", cols: 1, rows: 1, color: "lightgreen" }
  ];
  @Input() categories;
  private category;
  addCategoryControl = new FormControl();

  constructor(private collabService: CollabService) {}

  ngOnInit() {
    console.log(this.categories);
  }

  isScreenSmall(): boolean {
    // return this.mediaMatcher.matches;
    return false;
  }
  handleChange(e) {
   // this.addCategoryControl.valueChanges.subscribe(value => {
      this.category = e.target.value;
   // });
  }
  postCategory() {
   // this.handleChange();
    this.collabService.postCategory({name: this.category }).subscribe(data => data;
    console.log(this.category);
  }
}
