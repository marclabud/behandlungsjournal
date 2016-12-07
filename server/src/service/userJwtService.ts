'use strict';
/**
 * Service for JsonWebToken (JWT). Introduction see https://jwt.io/introduction/
 */
import {sign, verify} from 'jsonwebtoken';
import {User} from './model/user';
import {JwtKeyProvider} from './keyProviderService';
import {Request} from 'express-serve-static-core';

export class JwtUserService {

  constructor( private keyProvider: JwtKeyProvider) {}

  public createJWT(user: User ) {
    let secret = this.keyProvider.getKey();
    let createdToken = sign (user, secret);
    console.log ('createJWT: ' , createdToken);
    return createdToken;
  }

  public whoIsUser(request: Request): User {
    let user: User = new User();
    let auth: any = request.header('authorisation');
    if (auth && auth.indexOf('Bearer') >= 0) {
      let jwt = auth.substring(7);
      jwt = jwt.replace(/\"/g, '');
      let decodedtoken = verify(jwt, this.keyProvider.getKey());
      if (decodedtoken) {
        console.log('username from token:' , 'name:', decodedtoken._doc.name, 'rolle:', decodedtoken._doc.role );
        user.name = decodedtoken._doc.name;
        user.role = decodedtoken._doc.role;
      } else {
        user = null;
      }
    } else {
      user = null;
    }
    return user;

  }
}
