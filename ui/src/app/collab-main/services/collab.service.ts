import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../core/services/api.service';
import { APIEndpoints } from '../../constants/api-endpoints.constant';
import { Category } from '../models/category';

@Injectable()
export class CollabService {

  constructor(private apiService: ApiService) { }

  getCategories(): Observable<Category[]> {
    return this.apiService.getAll(`http://localhost:3000/${APIEndpoints.categories.endpoint}`);
   }
   postCategory(reqObj): Observable<Category[]> {
    return this.apiService.postData(`http://localhost:3000/${APIEndpoints.categories.endpoint}`, reqObj);
   }

}
