import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit, AfterViewInit {
  formGroup: FormGroup;
  formGroupA: FormGroup;
  message:String
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  constructor(private userService : UserServiceService,private router : Router) { }
  constats:String[]
  constats1:String[]
  @ViewChild("loginref") loiginElrmrntRef : ElementRef //The view child is use to take the #loginref from the html and assign it to the elementref property of this variable
  ngOnInit() {
    this.constats = ["Hi","There","whats","Up"]
    this.constats1 = ["","","",""]
    this.initForm();
  }
  ngAfterViewInit(){ //we have to implement AfterViewInt for accessing this life cycle hook
    this.loiginElrmrntRef.nativeElement.focus();//this will have the pointer focus to the #loginref input element in the html.
    console.log(this.loiginElrmrntRef)
  }
  public getUserService(){
    return this.userService;
  }
  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
    this.formGroupA = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      emailId: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required])
    })
  }
  signUp(){
    if(this.formGroupA.valid){
      console.log(this.formGroupA.value)
      this.userService.sendSignUpDetPost(this.formGroupA.value).subscribe(
        
          res=>{
            console.log("Response: " + res)
            this.message = " SuccessFully Registered"
          },
          error=>{
            console.log("Error: " + error)
            this.message = " Failed to register"
          }
        
      )
    }
  }
  //onSubmit(from: NgForm){
  login(){
   // console.log(from.value);
   
    if(this.formGroup.valid){    
      console.log(this.formGroup.value)
    this.userService.executeJWTAuth(this.formGroup.value).subscribe(
        res =>{
          console.log("success");
          this.router.navigate(['/testPage']);
        },
        err=>{
          console.log("error");
        }
    )
      }
  }
}
