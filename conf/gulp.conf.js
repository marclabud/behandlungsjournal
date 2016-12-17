/**
 *  The main paths of project handle these with care
 *
 *  Caution: dist_client is set for angular_cli
 *  in angular_cli.json out_dir with dist/public
 *
 */
exports.paths = {
  src: 'src',
  srcServer: 'server',
  srcTestdata: 'server/test',
  dist: 'dist',
  tmp: '.tmp',
  tasks: 'gulp_tasks',
  dist_client: 'public'
};

exports.tsconfig = {
  serverpath: "server/src/tsconfig.json",
  clientpath: "tsconfig.json"
};
