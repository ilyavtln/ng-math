import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUserData} from "../models/user-data.interface";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  baseUrl = 'http://31.128.42.224:8000';
  http = inject(HttpClient);

  getNetwork() {
    return this.http.get(`${this.baseUrl}/networks/all`)
  }

  registerUser(userData: IUserData) {
    return this.http.post(`${this.baseUrl}/auth/register`, userData);
  }

  authUser(userData: any) {
    return this.http.post(`${this.baseUrl}/auth/login`, userData);
  }

  getUser() {
    return this.http.get(`${this.baseUrl}/user`)
  }
}
