import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { CollabService } from '../services/collab.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  categories;
  post;
  addPostControl = new FormControl();
  serverMessage;

  constructor(private route: ActivatedRoute, private router: Router, private collabService: CollabService) {
    //this.navigateDetails('/(sidebar:rightoutlet)');
   }

  ngOnInit() {
console.log(this.route.snapshot.params['id'])

//this.collabService.getPosts
  }

  navigateDetails(sidebarPath) {
    this.router.navigateByUrl(sidebarPath, { skipLocationChange: true });
 }

 handleChange(e) {
  // this.addCategoryControl.valueChanges.subscribe(value => {
     this.post = e.target.value;
  // });
 }
 sendPost() {
  // this.handleChange();
   this.collabService.sendPost({body: this.post, category: this.route.snapshot.params['id']})
   .subscribe(data => { this.serverMessage = data; } );
   console.log(this.post);
 }
}
