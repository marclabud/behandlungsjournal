import {jwtKey} from '../../../server.conf';
/**
 * Provides key for JsonWebToken jwt.sign
 */
export interface IKeyProvider {
  getKey(): string;
}

export class JwtKeyProvider implements IKeyProvider {
  private key: string;

  public getKey(): string {
    if (!this.key) {
      this.key = jwtKey;
    }
    return this.key;
  }
}
