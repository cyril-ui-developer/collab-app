import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.navigateDetails('/(sidebar:rightoutlet)');
   }

  ngOnInit() {
  }

  navigateDetails(sidebarPath) {
    this.router.navigateByUrl(sidebarPath, { skipLocationChange: true });
 }
}
