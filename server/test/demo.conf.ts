// ToDo: Use classes

// base-path for testserver
// http://127.0.0.1:5000/api
// start aus nodeserver mit server.js:
// base-path /api
// deploy docker: MONGODB_URI from env

export const paths: any = {
  dist_client: 'public',
  base_path: '/api'
};
export const connection: any = {
  dbsystem: 'mongodb://',
  dburl: 'localhost:27017',
  dbname: 'test'
};
