import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/Services/login.service';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.scss']
})
export class LoginnComponent implements OnInit {

  constructor(private loginService:LoginService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  LoginForm=this.fb.group({
    userName:[''],
    password:['']
  }

  )
  get password()
  {
    return this.LoginForm.get('password');

  }
  get name()
  {
    return this.LoginForm.get('userName')
  }
  Login()
  {
       var login={
         UserNmae:this.name?.value,
         Password:this.password?.value,
         grant_type: 'password',


       }
       this.loginService.Login(login).subscribe
       (data =>
        {alert("Logined Succesfully")},Error => {alert("Login Failed")
     //  this.dataSaved = true;  
  //  this.massage = 'Record saved Successfully';  
  
        });
 


  }

}
