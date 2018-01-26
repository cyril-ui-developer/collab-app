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
  public categories: Category[];
  private errorMsg = 'fgh';

  constructor(private route: ActivatedRoute, private router: Router, private collabService: CollabService) {
  //  this.navigateDetails('/(center:defaultcenter)');
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
    navigateDetails(sidebarPath) {
      this.router.navigateByUrl(sidebarPath, { skipLocationChange: true });
   }
}
