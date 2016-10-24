import {Injectable} from '@angular/core';
import {RequestOptions, Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Cache} from "./cache";


@Injectable()
export abstract class ServiceBase<TItem> {
  protected cache:Cache<Array<TItem>>;

  constructor(protected http:Http, protected cacheKey:string) {
    this.cache = new Cache<Array<TItem>>(cacheKey);
  }

  public getCache():Cache<Array<TItem>> {
    return this.cache;
  }

  public get(forceReload:boolean = false):Observable<TItem> {
    if (this.cache.hasCache() && !forceReload) {
      return Observable.create((observer) => {
        observer.next(this.cache.readCache());
        observer.complete();
      });
    }

    return this.http.get(this.getServiceUrl(), {withCredentials: true}).map(res => {
      let orderStatus = res.json();
      this.cache.writeCache(orderStatus);
      return (<TItem>orderStatus);
    });
  }


  public getAll(forceReload:boolean = false):Observable<TItem[]> {
    if (this.cache.hasCache() && !forceReload) {
      return Observable.create((observer) => {
        observer.next(this.cache.readCache());
        observer.complete();
      });
    }

    return this.http.get(this.getServiceUrl(), {withCredentials: true}).map(res => {
      let orderStatus = res.json();
      this.cache.writeCache(orderStatus);
      return (<TItem[]>orderStatus);
    });
  }

  protected abstract getServiceUrl():string;
}
