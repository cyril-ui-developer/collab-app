export const APIEndpoints: APIEndpointsModel = {
  categories: {
     endpoint: 'categories',
     msg:  '......'
 },
 posts: {
  endpoint: 'posts',
  msg:  '......'
}

};

interface APIEndpointsModel {
categories: Categories;
posts: Categories;
}

interface Categories  {
  endpoint: string;
  msg:  string;
}
