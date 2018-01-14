import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollabMainComponent } from './collab-main/collab-main.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes: Routes = [
  { path: '', component: CollabMainComponent,
   children: [
            {path: '', component: MainContentComponent }
   ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollabMainRoutingModule { }
