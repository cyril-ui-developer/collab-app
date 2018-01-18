import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { CollabService } from '../services/collab.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  categories;
  constructor(private route: ActivatedRoute, private router: Router, private collabService: CollabService) {
    this.navigateDetails('/(sidebar:rightoutlet)');
   }

  ngOnInit() {

  }

  navigateDetails(sidebarPath) {
    this.router.navigateByUrl(sidebarPath, { skipLocationChange: true });
 }

}
