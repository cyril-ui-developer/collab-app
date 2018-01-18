import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

import { CollabService } from '../services/collab.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-collab-main',
  templateUrl: './collab-main.component.html',
  styleUrls: ['./collab-main.component.scss']
})
export class CollabMainComponent implements OnInit {
  private categories: Category[];
  private errorMsg = 'fgh';

  constructor(private route: ActivatedRoute, private router: Router, private collabService: CollabService) {
    //this.navigateDetails('/col(sidebar:rightoutlet)');
   }

  ngOnInit() {
    this.loadCategories();
  }
  loadCategories() {
    this.collabService.getCategories()
     .subscribe((data: Category[]) => {  this.categories = data; },
                  (error) =>  {this.errorMsg = error; }
                );
    }

}
