import {JwtUserService} from './userJwt.service';
import {JwtKeyProvider} from './keyProvider.service';
import {User} from '../../model/user';
import {Request} from 'express-serve-static-core';

export class AuthService {
  constructor() {
  }

  getjwtToken(user: User): string {
    let keyProvider = new JwtKeyProvider();
    let jwtUserservice = new JwtUserService(keyProvider);
    return jwtUserservice.createJWT(user);
  }

  whoIsUser(request: Request): User {
    let keyProvider = new JwtKeyProvider();
    let jwtUserService = new JwtUserService(keyProvider);
    return jwtUserService.whoIsUser(request);
  }

}
