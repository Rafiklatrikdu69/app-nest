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
  getSession():Observable<any>{

    return this.http.get(this.url+"user/session",{ withCredentials: true })
  }
  addSession(session:string){

    return this.http.post(this.url+"user/session/"+session,{ withCredentials: true })
  }
  deleteSession(){
    return this.http.delete(this.url+'user/session/remove',{withCredentials :true});
  }
  getInfo(){
    return this.http.get("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=IBM&apikey=demo")
  }
}
