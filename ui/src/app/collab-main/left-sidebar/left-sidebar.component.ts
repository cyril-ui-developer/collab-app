import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { CollabService } from '../services/collab.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

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
    this.collabService.postCategory({name: this.category }).subscribe(data => data);
    console.log(this.category);
  }

}
