import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { CollabService } from '../services/collab.service';

@Component({
  selector: 'app-left-outlet',
  templateUrl: './left-outlet.component.html',
  styleUrls: ['./left-outlet.component.scss']
})
export class LeftOutletComponent implements OnInit {


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
