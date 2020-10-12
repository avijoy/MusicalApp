import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserServiceService,private router: Router) { }

  ngOnInit(): void {
  }
  isUserLoggedin(){
    if(this.userService.isUserLoggedIn()){
      return true
    }
    return false
  }
  logout(){
    this.userService.logout();
    this.router.navigateByUrl("/homepage")
  }
}
