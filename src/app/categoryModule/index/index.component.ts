import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Classes/category';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  categoryList:Category[]=[];
  errorMsg: any;
  constructor(private categoryService:CategoryService, private route: ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
    this.categoryService.returnAllCategory().subscribe
    ( categoryData=>
      {
        this.categoryList=categoryData;
<<<<<<< HEAD
        alert(this.categoryList);
       JSON.stringify(this.categoryList);
        for(var i=0;i<this.categoryList.length;i++)
        {
               console.log(this.categoryList[i]);
        }
=======
        for(var i=0;i<this.categoryList.length;i++){
          console.log(this.categoryList[i]);
        }   
>>>>>>> aa9308c7c6b478f2c69591eb21ad28981d796f74
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    );
  }
  getCategory(){
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

  deleteCategory(id:any){
  this.categoryService.deleteCategory(id)
  .subscribe(() => {
    this.getCategory();
  }, (err) => {
    console.log(err);
  });
}


}
