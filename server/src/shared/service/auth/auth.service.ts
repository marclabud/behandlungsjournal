import {JwtUserService} from './userJwt.service';
import {JwtKeyProvider} from './keyProvider.service';
import {User} from '../../model/user';
import {Request} from 'express-serve-static-core';

export class AuthService {
  constructor() {
  }

  getjwtToken(user: User): string {
    const keyProvider = new JwtKeyProvider();
    const jwtUserservice = new JwtUserService(keyProvider);
    return jwtUserservice.createJWT(user);
  }

  whoIsUser(request: Request): User {
    const keyProvider = new JwtKeyProvider();
    const jwtUserService = new JwtUserService(keyProvider);
    return jwtUserService.whoIsUser(request);
  }

}
