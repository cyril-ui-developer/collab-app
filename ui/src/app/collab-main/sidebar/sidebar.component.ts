import { Component, OnInit, Input } from "@angular/core";
import { MainContentComponent } from "../main-content/main-content.component";
import { FormGroup, FormControl } from "@angular/forms";

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

  constructor() {}

  ngOnInit() {
    console.log(this.categories);
  }

  isScreenSmall(): boolean {
    // return this.mediaMatcher.matches;
    return false;
  }
  addCategory() {
    this.addCategoryControl.valueChanges.subscribe(value => {
      this.category = value;
    });
  }
  postCategory() {
    this.addCategory();
    //this.apiService.postMessage({msg: this.postMsg });
    console.log(this.category);
  }
}
