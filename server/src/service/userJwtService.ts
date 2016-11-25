'use strict';
/**
 * Service for JsonWebToken (JWT). Introduction see https://jwt.io/introduction/
 */

import { sign } from 'jsonwebtoken';
import {User} from './model/user';
import {JwtKeyProvider} from './keyProviderService';

export class JwtUserService {

  constructor( private keyProvider: JwtKeyProvider) {}

  public createJWT(user: User ) {
    let secret = this.keyProvider.getKey();
    let createdToken = sign (user, secret);
    console.log ('createJWT: ' , createdToken);
    return createdToken;
  }
}
