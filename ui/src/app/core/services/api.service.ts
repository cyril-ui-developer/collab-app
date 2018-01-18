import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http , Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient ) { }

getAll(url): Observable<any> {
    return this.http.get<any>(url);

  }

// getAll(url): Observable<any> {
//   return this.http.get<any>(url)
//                   .map((response: Response) => {
//                     const result = response.json();
//                     return result;
//                   })
//                   .catch((error: Response | any) => {
//                      console.log(error.statusText);
//                      return Observable.throw(error.statusText);
//                   });
// }
// getOneById(url): Observable<any> {
//     return this.http.get(url)
//                     .map((response: Response) => {
//                       const result = response.json();
//                       return result;
//                     })
//                     .catch((error: Response | any) => {
//                        console.log(error.statusText);
//                        return Observable.throw(error.statusText);
//                     });
//   }

//  postData(url, obj): Observable<any> {
//     const headers = new Headers({ 'Content-Type': 'application/json' });
//     const options = new RequestOptions({ headers: headers });

//     return this.http.post(url, obj , options)
//                      .map((response: Response) => {
//                       const result = response.json();
//                       return result;
//                     })
//                     .catch((error: Response | any) => {
//                        console.log(error.statusText);
//                        return Observable.throw(error);
//                     });
//   }


}
