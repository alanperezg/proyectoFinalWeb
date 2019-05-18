import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-deyou-administration-login',
  templateUrl: './deyou-administration-login.component.html',
  styleUrls: ['./deyou-administration-login.component.css']
})
export class DeyouAdministrationLoginComponent implements OnInit {
  user: String;
  password: String
  appearWrongPassword: Boolean;
  constructor(private loginService: GlobalService) { }

  ngOnInit() {
    this.user = "";
    this.password = "";
    this.appearWrongPassword = false;
  }
  loginBtn(){
    this.loginService.login(this.user, this.password).subscribe((res)=>{
      if(!res){
        this.appearWrongPassword = true;
      }
    });
  }
  

}
