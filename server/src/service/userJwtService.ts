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

  public whoIsUser(request: Request): string {
    let username = 'null'; // null
    let auth: any = request.header('authorisation');
    if (auth && auth.indexOf('Bearer') >= 0) {
      let jwt = auth.substring(7);
      jwt = jwt.replace(/\"/g, '');
      let decodedtoken = verify(jwt, this.keyProvider.getKey());
      if (decodedtoken) {
        console.log('username from token:' , decodedtoken._doc.name);
        username = decodedtoken._doc.name;
      }
    }
    return username;

  }
}
