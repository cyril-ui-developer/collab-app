import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollabMainComponent } from './collab-main/collab-main.component';

const routes: Routes = [
  { path: '', component: CollabMainComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollabMainRoutingModule { }
