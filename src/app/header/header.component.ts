import { getLocaleCurrencyCode } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MserviceService } from 'src/Services/mservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private s:MserviceService) { }
  LogOut()
  {
  
    localStorage.setItem("logged","false");
  }
flag:boolean;
logFlag:boolean;
  ngOnInit(): void {
   // alert(localStorage.getItem("logged"))
   if  (localStorage.getItem("flag")!=null && localStorage.getItem("flag")=="true"&&localStorage.getItem("logged")=="true") 
   {
     this.flag=true;
   }
   if(localStorage.getItem("logged")!=null&&localStorage.getItem("logged")=="true")
   {
     this.logFlag=true;
    // alert(this.logFlag)
   }
   else if(localStorage.getItem("logged")!=null&&localStorage.getItem("logged")=="false")
   {
  //   alert("jjjjjjj");
     this.logFlag=false;
   }
   else
   {
     this.flag=false;
   }

  }


}
