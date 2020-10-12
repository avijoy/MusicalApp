import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
//Purpose of this class is to add the JWT token to Header
@Injectable()
export class TokenInterceptor implements HttpInterceptor{

    /*intercept(request: HttpRequest<any>, next:HttpHandler){
        var token = localStorage.getItem('token');
        request = this.addToken(request,token)
        return next.handle(request);
    }

    addToken(request:HttpRequest<any>,token: string){
        return request.clone({
            setHeaders:{"Authorization": `Bearer ${token}`}
        })
    }*/
    constructor(private router: Router,private userService: UserServiceService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("inside HTTP INTERCEPTOR")
       /* let username = 'avijoy'
        let password = 'password'
        let basicAuthHeader='Basic ' + window.btoa(username + ':' + password)*/
        let basicAuthHeader=this.userService.getSessionToken()
        let username = this.userService.getSessionUser()
        console.log(request.url)
        /*if(request.url == "http://localhost:8080/addBankDet"){
        
            request = request.clone({
                setHeaders : {
                    Authorization : basicAuthHeader
                }
          })
        }*/
        if(username && basicAuthHeader){
            request = request.clone({
                setHeaders : {
                    Authorization : basicAuthHeader
                }
          })
        }
        return next.handle(request);
    }
}
