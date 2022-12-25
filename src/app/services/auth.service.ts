import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";

interface User {
  id: number
  username: string
}

@Injectable()
export class AuthService {
  user: User = { id: 0, username: ''}

    constructor(private http: HttpClient, private storageService: StorageService) { }


    setUser(user: User, saveToStorage : boolean = true) {
      this.user = user
      if(saveToStorage) this.storageService.saveToStorage('user', user)
    }

    login(data: any) {
      return this.http.get(`https://jsonplaceholder.typicode.com/users?username=${data.userName}&password=${data.password}}`)
      .pipe()
    }

    logout() {
      this.user = { id: 0, username: ''}
    }
}
