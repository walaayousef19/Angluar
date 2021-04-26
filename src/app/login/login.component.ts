import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { LoginService } from 'src/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:any
  constructor(private fb:FormBuilder,private loginService:LoginService) { }

  ngOnInit(): void {
this.loginForm=this.fb.group(
  {
    password:[''],
    userName:['']
  }
)

  }
  get password()
  {
    return this.loginForm.get('password');

  }
  get name()
  {
    return this.loginForm.get('userName')
  }
  Login()
  {
       var login={
         userNmae:this.name.value,
         password:this.password.value,
         grant_type: 'password',


       }
       this.loginService.Login(login);


  }

}
