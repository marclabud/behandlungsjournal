export interface IRbacProvider {
  new(): IRbacProvider;
  getRoles(user);
  getPermissions(role);
  getAttributes(role);
}
