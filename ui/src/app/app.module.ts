import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CollabMainModule } from './collab-main/collab-main.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

//remove shared module after refactoring
// import { SharedModule } from './shared/shared.module';
const routes: Routes = [
 // { path: '', component: AppComponent },

  //  { path: '', loadChildren: './collab-main/collab-main.module#CollabMainModule' },
  //{ path: '', component: AppComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    CollabMainModule,
    RouterModule.forRoot(routes),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
