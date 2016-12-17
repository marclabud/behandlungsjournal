// ToDo: Use classes

// base-path for testserver
// http://127.0.0.1:5000/api
// start aus nodeserver mit server.js:
// base-path /api

export const paths: any = {
  dist_client: 'public',
  base_path: '/api'
};
export const connection: any = {
  dbsystem: 'mongodb://',
  dburl: 'localhost:27017',
  dbname: 'test'
};

export const dbConnectionUrl: string = connection.dbsystem
  .concat(connection.dburl)
  .concat('/')
  .concat(connection.dbname);

export const jwtKey = 'CASFrontendEngineering2016';
