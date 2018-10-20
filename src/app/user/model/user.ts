export class User {
  _id: string;
  name: string;
  email: string;
  password: string;
  role = 'Guest';
}

export interface LoginInterface {
    id_token: string
}
