/**
 * Service for JsonWebToken (JWT). Introduction see https://jwt.io/introduction/
 */
import {sign, verify} from 'jsonwebtoken';
import {User} from '../../model/user';
import {JwtKeyProvider} from './keyProvider.service';

export class JwtUserService {

  constructor( private keyProvider: JwtKeyProvider) {}

  public createJWT(user: User ) {
    const secret = this.keyProvider.getKey();
    const createdToken = sign (user.toJSON(), secret, { expiresIn: '3h' });
    console.log ('createJWT: ' , createdToken);
    return createdToken;
  }

  public whoIsUser(token: string): User {
    let user: User = new User();
    const bearername = 'Bearer';
    // ('Authorisation')
    if (token && token.indexOf(bearername) >= 0) {
      const jwt = token.substring((bearername).length + 1);
        try {
            const decodedtoken = verify(jwt, this.keyProvider.getKey());
            if (decodedtoken) {
                console.log('username from token:' , 'name:', decodedtoken.name, 'rolle:', decodedtoken.role );
                user.name = decodedtoken.name;
                user.role = decodedtoken.role;
            } else {
                user = null;
            }
        } catch (err) {
            console.log('invalid token', err);
            user = null;
        }
    } else {
       user = null;
    }
    return user;
  }
}
