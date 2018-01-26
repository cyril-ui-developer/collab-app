import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollabMainComponent } from './collab-main/collab-main.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RightOutletComponent } from './right-outlet/right-outlet.component';

const routes: Routes = [
  { path: '', component: CollabMainComponent },
  {path: 'defaultcenter/:id', component: MainContentComponent, outlet: 'center' },

    //    ]},
 //  {path: 'posts/:id', component: MainContentComponent },
  //{path: 'rightoutlet', component: RightOutletComponent, outlet: 'sidebar' },
// {
//    children: [
//             {path: 'posts/:id', component: MainContentComponent },
//          //   {path: '', component: RightOutletComponent, outlet: 'sidebar' },

//    ]
//   },

 // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollabMainRoutingModule { }
