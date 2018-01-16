export const APIEndpoints: APIEndpointsModel = {
  categories: {
     endpoint: 'categories',
     msg:  '......'
 }

};

interface APIEndpointsModel {
categories: Categories;
}

interface Categories  {
  endpoint: string;
  msg:  string;
}
