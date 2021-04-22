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
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    );
  }

}
