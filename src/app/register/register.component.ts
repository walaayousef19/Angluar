import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {UserService} from 'src/Services/user.service'
import { User } from '../Classes/User';
import { validate } from '../Custom Validator/ConfirmPass.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(private fb:FormBuilder,private userService:UserService,private router:Router) { }
  errorMsg: any;
  dataSaved=false;
  massage: string;

  ngOnInit(): void {
     
  }
 addUserForm=this.fb.group({

  UserName:['',[Validators.required,Validators.pattern(/^[A-Za-z]/)]],
    Email:['',[Validators.required,Validators.pattern(/^[A-Za-z0-9]+@[a-zA-Z]/)]],
    Password:['',[Validators.required]],
    confirmPassword:['',[Validators.required]],
    Address:['',[]],
    Birthdate:['',[]],
    Gender:['',[]],
    Country:['',[]],

  },{validators:[validate]})

  get UserName()
  {
    return this.addUserForm.get('UserName')
  }
    get Email(){
    return this.addUserForm.get('Email')

  }
  get Password()
  {
    return this.addUserForm.get('Password')
  }

  get confirmPassword()
  {
    return this.addUserForm.get('confirmPassword')
  }
  get Address()
  {
    return this.addUserForm.get('Address')
  }
  get Birthdate()
  {
    return this.addUserForm.get('Birthdate')
  }
  get Gender()
  {
    return this.addUserForm.get('Gender')
  }
  get Country()
  {
    return this.addUserForm.get('Country')
  }



  addUser(user:User)
  {
           
           this.userService.addUser(user).subscribe
            (data =>
               {alert("Succesfully Added User details")},Error => {alert("failed while adding User details")
              this.dataSaved = true;  
           this.massage = 'Record saved Successfully';  
         
               });
        
         
          this.router.navigate(['/Login']);
  }

}
