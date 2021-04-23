import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Classes/category';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  categoryList:Category[];
  errorMsg: any;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.returnAllCategory().subscribe
    ( categoryData=>
      {
        this.categoryList=categoryData;
        alert(this.categoryList);
       JSON.stringify(this.categoryList);
        for(var i=0;i<this.categoryList.length;i++)
        {
               console.log(this.categoryList[i]);
        }
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    );
  }

}
