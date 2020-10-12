import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { FooService } from "../service/foo.service";
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
    formGroup: FormGroup;
    fooString: String;
    flagForstr: boolean;
    
    //isuerLogged: boolean
  private file = null;
  message: String
    constructor(private fooService:FooService,private userService: UserServiceService,private router: Router) { 

    }
  imageChoice(theEventFromHtml) {
    this.file = theEventFromHtml.target.files[0];
  }
  ngOnInit(): void {
    this.flagForstr = false
  }

  /*isUserLoggedin(){
    if(this.userService.isUserLoggedIn()){
      return true
    }
    return false
  }
  logout(){
    this.userService.logout();
    this.router.navigateByUrl("/homepage")
  }*/
  onSubmit(form:NgForm){
    console.log(form.value)
      if(this.file === null){
      this.fooService.postMethod(form.value).subscribe(
        res =>{
          console.log(res);
          this.flagForstr = true
          this.message = res.message;
        },
        err =>{
          console.log(err)
        }
      )
      }
    if (this.file !== null) {
      const formdata: FormData = new FormData();
      formdata.append('file', this.file);
      //this.http.post("http://localhost:8080/addFile", formdata, { observe: 'response', responseType: 'text'}).subscribe();
      this.fooService.postMethodFile(formdata).subscribe(res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      })
    }
  }
}
