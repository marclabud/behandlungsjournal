/**
 * Service for JsonWebToken (JWT). Introduction see https://jwt.io/introduction/
 */
import {sign, verify} from 'jsonwebtoken';
import {User} from '../../model/user';
import {JwtKeyProvider} from './keyProvider.service';
import {Request} from 'express-serve-static-core';

export class JwtUserService {

  constructor( private keyProvider: JwtKeyProvider) {}

  public createJWT(user: User ) {
    const secret = this.keyProvider.getKey();
    const createdToken = sign (user.toJSON(), secret, { expiresIn: '3h' });
    console.log ('createJWT: ' , createdToken);
    return createdToken;
  }

  public whoIsUser(request: Request): User {
    let user: User = new User();
    const auth: any = request.header('Authorisation');
    if (auth && auth.indexOf('Bearer') >= 0) {
      let jwt = auth.substring(7);
      jwt = jwt.replace(/\"/g, '');
      console.log ('jwt', jwt);
      const decodedtoken = verify(jwt, this.keyProvider.getKey());
      if (decodedtoken) {
        console.log('username from token:' , 'name:', decodedtoken.name, 'rolle:', decodedtoken.role );
        user.name = decodedtoken.name;
        user.role = decodedtoken.role;
        // user.name = 'Paul';
        // user.role = 'Arzt';
      } else {
          user = null;

      }
    } else {
      // user = null;
      // ToDo: Fix Workaround
      user.name = 'Paul';
      user.role = 'Arzt';
    }
    return user;

  }
}
