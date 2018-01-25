import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { ApiService } from './services/api.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
   { path: 'login', component: LoginComponent  },
   { path: 'register', component: RegisterComponent  },
   //  { path: '', loadChildren: './collab-main/collab-main.module#CollabMainModule' },
   //{ path: '', component: AppComponent },
  // { path: '**', redirectTo: '' }
 ];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterComponent , LoginComponent, HeaderComponent],
providers: [ ApiService ],
exports: [ RegisterComponent , LoginComponent, HeaderComponent]
})
export class CoreModule { }
