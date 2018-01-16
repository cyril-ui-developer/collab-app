import { Injectable } from '@angular/core';

import { ApiService } from '../../core/services/api.service';
import { APIEndpoints } from '../../constants/api-endpoints.constant';


@Injectable()
export class CollabService {

  constructor(private apiService: ApiService) { }

  getCategories() {
    return this.apiService.getAll('http://localhost:3000/' + APIEndpoints.categories.endpoint);
   }


}
