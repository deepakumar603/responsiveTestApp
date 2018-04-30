import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userList=new Array();
  searchKey:string="";
  chosenUser:any;
  constructor(private appService:AppService,private router:Router) { }

  ngOnInit() {
  }

  searchUser(user:string){
    console.log(user);
    this.searchKey=user;
    if(user.length>3){
      this.appService.getSearchUser(user).subscribe(response => {
        this.userList=response.items;
      })
    }    
  }

  selectedUser(selectedUser:any){
    console.log(JSON.stringify(selectedUser));
    this.chosenUser=selectedUser;
    this.searchKey=selectedUser.name;
    this.userList=new Array();
  }
  removeSearch(){
    this.searchKey="";
    this.userList=new Array();
  }
}
