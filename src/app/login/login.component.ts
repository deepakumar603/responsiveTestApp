import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  users=new Array();
  errorMessage:string;
  constructor(private appService:AppService,private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.appService.getUserData().subscribe( response => {
      this.users = response, 
      error => this.errorMessage = error 
      for(let i=0;i<this.users.length;i++){
        if(this.username==this.users[i].login && this.password=='testing'){
          this.router.navigate(['dashboard']);
        } else{
          this.errorMessage="Username and paswword not found";
        }
      }
    });
  }
}
