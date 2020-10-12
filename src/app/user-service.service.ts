import { Injectable } from '@angular/core';
import { Users } from './users.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from "@angular/router";
import { environment } from 'src/environments/environment';
import { config } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient,private router: Router) { }
  selectedUser : Users = {
    username: ' ', 
    password: ' ',
    email: ' '     
  }
  
  sendLoginUserDetPost(users){
    //http post method
    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa("avijoy:password"));

    const httpOptions = {
      headers: headers_object
    };
    return this.http.post(environment.baseUrl+"login",users,httpOptions);
  }
  sendSignUpDetPost(users){
   // localStorage.setItem('currentUser', 'avijoy');
  /* var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa("avijoy:password"));*/

    /*const httpOptions = {
      headers: headers_object
    };*/
    
      /*this.http.get("http://localhost:8080/usersList").subscribe(
        res =>{
          console.log(res);
        }
      )*/
     
    return this.http.post(environment.baseUrl+"signUp",users)
      //map(users => {
      // login successful if there's a user in the response
          // store user details and basic auth credentials in local storage 
          // to keep user logged in between page refreshes
         // users.authdata = window.btoa("avijoy" + ':' + "password
 
  }
  /*login(username: string, password: string) {
    return this.http.post<any>(`environment.baseUrl/login`, { username, password })
        .pipe(map(user => {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        }));
}*/
login(users) {
 /* return this.http.post<any>(environment.baseUrl + "/login",users)
      .pipe(map(user => {
          // login successful if there's a user in the response
          if (user) {
              // store user details and basic auth credentials in local storage 
              // to keep user logged in between page refreshes
              user.authdata = window.btoa("avijoy" + ':' + "password");
              localStorage.setItem('currentUser', JSON.stringify(user));
          }

          return user;
      }));*/
      return this.http.post<any>(environment.baseUrl + "/authenticate",users)
      .pipe(map(user => {
          // login successful if there's a user in the response
          if (user) {
              // store user details and basic auth credentials in local storage 
              // to keep user logged in between page refreshes
              user.authdata = window.btoa("avijoy" + ':' + "password");
              localStorage.setItem('currentUser', JSON.stringify(user));
          }

          return user;
      }));
}
/*logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}*/
executeJWTAuth(user){
  console.log(user.username + user.password)
  /*let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);
  let headers = new HttpHeaders({
    Authorization: basicAuthHeader
  })*/
  let username = user.username
  let password = user.password
  return this.http.post<any>(environment.baseUrl + 'authenticate',{ username,
    password}).pipe(map(
    res =>{
     /* console.log("inside get request"+res)
      sessionStorage.setItem('authenticaterUser',username);
      sessionStorage.setItem('token',`Bearer ${res.token}`);
      return res;*/
      console.log("inside get request"+res)
        sessionStorage.setItem('authenticaterUser',username);
        sessionStorage.setItem('token',`Bearer ${res.token}`);
        return res;
    },
    err=>{
      console.log("inside get error"+err)
    }
   
  ));
}
getSessionUser(){
  return sessionStorage.getItem('authenticaterUser');
}

getSessionToken(){
  if(this.getSessionUser() != null){
    return sessionStorage.getItem('token')
  }
}

logout(){
  sessionStorage.removeItem('authenticaterUser')
  sessionStorage.removeItem('token')
}
isUserLoggedIn(){
  if(this.getSessionToken()){
    return true
  }
  return false
}
}
