import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";


@Injectable()
export class StorageService {

 saveToStorage(key: string, value: any) {
  const json = JSON.stringify(value)
  localStorage.setItem(key, json)
 }

  getFromStorage(key: string) {
    const json = localStorage.getItem(key)
    return JSON.parse(json || '[]')
  }

  clearFromStorage(key: string) {
    localStorage.removeItem(key)
  }

  clearAll() {
    localStorage.clear()
  }

}

