import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-collab-main',
  templateUrl: './collab-main.component.html',
  styleUrls: ['./collab-main.component.scss']
})
export class CollabMainComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    //this.navigateDetails('/col(sidebar:rightoutlet)');
   }

  ngOnInit() {
  }


}
