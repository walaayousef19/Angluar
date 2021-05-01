import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Event, Router } from '@angular/router';



import { LoginService } from 'src/Services/login.service';
import { MserviceService } from 'src/Services/mservice.service';




@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.scss']
})
export class LoginnComponent implements OnInit {

  constructor(private loginService:LoginService,private fb:FormBuilder,private router:Router,private s:MserviceService) { }

  ngOnInit(): void {
  }
  sendDataToService() {
    this.s.setData(this.flag);
}
  flag:boolean=false
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
         UserName:this.name?.value,
         Password:this.password?.value,
         grant_type: 'password',



       }
       localStorage.setItem("logged","true");
       if(login.UserName=="admin"&&login.Password=="admin")
       {
       
         localStorage.setItem("flag","true");
       }
       else{
         localStorage.setItem("flag","false");
       }

       this.loginService.login(login.UserName,login.Password).subscribe
       (data =>
        {alert("Logined Succesfully");
     
   },Error => {alert("Login Failed")
     //  this.dataSaved = true;  
  //  this.massage = 'Record saved Successfully';  
  
        });
 

       this.router.navigate(['/home']);
  }
  
  
}
