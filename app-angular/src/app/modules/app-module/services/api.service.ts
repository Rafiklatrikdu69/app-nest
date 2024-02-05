import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  url = "http://localhost:3000/";
  getMessage(){
    return this.http.get(this.url);
  }
  insertUser(){
    return this.http.post(this.url+"user/create-user",{id:1,name:"Bouchenna"})
  }
}
