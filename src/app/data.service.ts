import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  API_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.API_URL}/users`);
  }

  getUser(userId) {
    return this.http.get(`${this.API_URL}/users/${userId}`);
  }

  getPosts(){
    return this.http.get(`${this.API_URL}/posts`);
  }
}
