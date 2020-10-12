import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient,private router: Router) { }

  addBankDetails(bankDet){
    return this.http.post<any>(environment.baseUrl+"addBankDet",bankDet)
  }
}
