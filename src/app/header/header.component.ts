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
flag:boolean;

  ngOnInit(): void {
    alert(localStorage.getItem("flag"))
   if  (localStorage.getItem("flag")!=null && localStorage.getItem("flag")=="true" )
   {
     this.flag=true;
   }
   else
   {
     this.flag=false;
   }

  }


}
