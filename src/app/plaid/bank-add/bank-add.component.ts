import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BankService } from "../../service/bank.service"
import { BankDetailsModel } from "../model/bank-details-model"
import {UserServiceService} from "../../user-service.service"
@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.css']
})
export class BankAddComponent implements OnInit {

  formGroup: FormGroup;
  bankDetails:BankDetailsModel;
  message:string;
  constructor(private bankService: BankService,private userService:UserServiceService) { }
  initForm(){
    this.formGroup = new FormGroup({
      bankname: new FormControl('',[Validators.required]),
      accountnumber: new FormControl('',[Validators.required]),
      firstname: new FormControl('',[Validators.required]),
      lastname: new FormControl('',[Validators.required]),
      primary: new FormControl('',[Validators.required])
    })
  }
  ngOnInit(): void {
    this.initForm();
  }
  addBankDet(){
    console.log(this.formGroup.value)
    this.bankDetails = new BankDetailsModel(this.formGroup.value.bankname,this.formGroup.value.accountnumber,this.formGroup.value.firstname,this.formGroup.value.lastname,this.formGroup.value.primary,this.userService.getSessionUser())
    this.bankService.addBankDetails(this.bankDetails).subscribe(
      res=>{
        console.log(res)
        this.message= res.message
      },
      err =>{
        console.log(err)
      }
    )
  }
}
