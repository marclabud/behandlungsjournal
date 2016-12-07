/* ToDo: Shared Modell Directory for client and server */

export class User {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string = 'Guest';
}
