export class Cache<T> {

  constructor(private key: string) {
  }

  writeCache(value: T, isList: boolean = false): boolean {
    let stringifiedValue = JSON.stringify(value);
    localStorage.setItem(this.getKey(isList), stringifiedValue);
    return true;
  }

  readCache(isList: boolean = false): T {
    return JSON.parse(localStorage.getItem(this.getKey(isList)));
  }

  hasCache(isList: boolean = false): boolean {
    return !(localStorage.getItem(this.getKey(isList)) === null);
  }

  private getKey(isList: boolean) {
    return isList ? this.key + 's' : this.key;
  }
}
