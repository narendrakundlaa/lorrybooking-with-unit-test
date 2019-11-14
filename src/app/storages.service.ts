import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoragesService {

  constructor() { }

  localStoregeSetItem(key: string, value: string) {
    return localStorage.setItem(key, value);
  }
  localStoregeGetItem(key: string) {
    return localStorage.getItem(key);
  }
  localStoregeRemoveItem(key: string) {
    localStorage.clear();
    return localStorage.removeItem(key);

  }
}
