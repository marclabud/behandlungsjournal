export class Cache<T> {

  constructor(private key: string) {
  }

  writeCache(value: T): boolean {
    let stringifiedValue = JSON.stringify(value);
    localStorage.setItem(this.key, stringifiedValue);
    return true;
  }

  readCache(): T {
    return JSON.parse(localStorage.getItem(this.key));
  }

  hasCache(): boolean {
    return !(localStorage.getItem(this.key) === null);
  }

  /*
   appendCache(value:T):boolean {
   let items:Array<T> = this.readCache();
   items.push(value);
   return this.writeCache(items);
   }
   */
}
