import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ColLAB App';
  categories= [{"_id":"5a61961c33176d46c150dfe3","name":"Java"},{"_id":"5a619cf586ee556141edea7f","name":"Angular"},{"_id":"5a61963333176d46c150dfe4","name":"JavaScript"},{"_id":"5a61c29a60c5b86f2e4d567d","name":"React"},{"_id":"5a62ea5860c5b86f2e4d5681","name":"Vue"},{"_id":"5a66dec75067d2a115c7e2b1","name":"Koa"}];
}
