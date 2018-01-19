export const APIEndpoints: APIEndpointsModel = {
  categories: {
     endpoint: 'categories',
     msg:  '......'
 },
 post: {
  endpoint: 'post',
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
post: Categories;
}

interface Categories  {
  endpoint: string;
  msg:  string;
}
