# Patch instructions
Affter installing [rbac-a](https://www.npmjs.com/package/rbac-a) by `npm i` you must patch the rbac-a library.

## Steps
1. Copy file _CustomProvider.js_
   * From: server\lib\rbac-a
   * To: node_modules\rbac-a\lib\providers

2. Copy file _index.js_
   * From: server\lib\rbac-a
   * To: node_modules\rbac-a\lib
   
3. Restart server by `npm restart`

