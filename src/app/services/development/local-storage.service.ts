import { Injectable } from '@angular/core';

const STORAGE_NAME = 'angular-practice-local-storage';

interface StorageItem {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  fetchAll<T extends StorageItem>(): { [key: string]: T[] } {
    return JSON.parse(localStorage.getItem(STORAGE_NAME)) || {};
  }

  fetchItems<T extends StorageItem>(key: string): T[] | null {
    const storage = this.fetchAll<T>();
    return storage[key] || null;
  }

  fetchItem<T extends StorageItem>(key: string, id: number): T | null {
    const items = this.fetchItems<T>(key);
    return items.find(item => item.id === id) || null;
  }

  storeItems<T extends StorageItem>(key: string, items: T[]): void {
    const storage = this.fetchAll<T>();
    storage[key] = ((s, k, vals) => {
      const current = s[k] || [];
      if (current.length <= 0) {
        return current.concat(vals);
      }
      const filtered = current.filter(v => {
        return vals.some(val => val.id !== v.id);
      });
      return filtered.concat(vals);
    })(storage, key, items);
    localStorage.setItem(STORAGE_NAME, JSON.stringify(storage));
  }

  storeItem<T extends StorageItem>(key: string, item: T): void {
    this.storeItems(key, [item]);
  }

  deleteAll() {
    localStorage.removeItem(STORAGE_NAME);
  }

  deleteItems<T extends StorageItem>(key: string): void {
    const storage = this.fetchAll<T>();
    delete storage[key];
    localStorage.setItem(STORAGE_NAME, JSON.stringify(storage));
  }

  deleteItem<T extends StorageItem>(key: string, id: number): void {
    const items = this.fetchItems<T>(key);
    const filtered = items.filter(v => v.id !== id);
    localStorage.setItem(STORAGE_NAME, JSON.stringify(filtered));
  }
}
