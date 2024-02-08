import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  url = "http://localhost:3000/";
  getMessage(){
    return this.http.get(this.url);
  }
  insertUser(u:User){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url+"user/create-user",JSON.stringify(u),{ headers, responseType: "json"})
  }
  getUser(u:User):Observable<Object>{
    console.log(u.name)
    return this.http.get(this.url+"user/get/"+u.name+"/"+u.password)
  }
  getSession(){

    return this.http.get(this.url+"user/session",{ withCredentials: true })
  }
  addSession(session:string){

    return this.http.post(this.url+"user/session/"+session,{ withCredentials: true })
  }
}
