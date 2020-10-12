import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { StringModel } from '../model/string-model';
@Injectable({
  providedIn: 'root'
})
export class FooService {

  constructor(private http: HttpClient,private router: Router) { }
 

  postMethod(str){
    let basicAuthheader = this.createHeaders("avijoy","password");
    let headers = new HttpHeaders({
      Authorization: basicAuthheader
    })
    return this.http.post<StringModel>("http://localhost:8080/inputOfString",str)
  }

  postMethodFile(formdata){
    return this.http.post("http://localhost:8080/inputOfFile", formdata, { observe: 'response', responseType: 'text'})
  }
  createHeaders(username:String,password:String){
    // let username = 'avijoy'
    //let password = 'udem123'
    let basicAuthHeader='Basic ' + window.btoa(username + ':' + password) //btoa converts utf-8 to base 64 encryption\
    return basicAuthHeader
  }
}
