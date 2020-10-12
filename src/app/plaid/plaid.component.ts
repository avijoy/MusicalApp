import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BankDetails } from './bank-details';
import { Router } from '@angular/router'
@Component({
  selector: 'app-plaid',
  templateUrl: './plaid.component.html',
  styleUrls: ['./plaid.component.css']
})
export class PlaidComponent implements OnInit {

  constructor() { 
    //this.select = new EventEmitter();
  }
  
  ngOnInit(): void {
    //this.showflag = false
  }
 
}
