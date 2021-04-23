import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Category } from 'src/app/Classes/category';
import { CategoryService } from 'src/Services/category.service';
import { ProductService } from 'src/Services/product.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {

  errorMsg: any;
  caty:Category;

  constructor(private fb:FormBuilder,private categoryService:CategoryService, private route: ActivatedRoute ,private router: Router) {
   
   }

  updateCategoryForm=this.fb.group({
    id:[,[]],
    name:['',[Validators.required]]

  })
  get name()
  {

    return this.updateCategoryForm.get('name')
  }
  get id()
  {
    return this.updateCategoryForm.get('id')
  }

catId:number;
  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
 this.catId= this.route.snapshot.params['id'];;
     this.categoryService.getCategoryById(this.catId).subscribe(
      (res)=>
      {
        this.caty=res;
     //   alert(this.caty.Name);
        this.updateCategoryForm.controls['name'].setValue(this.caty.Name);
      },
    
      (errorResponse)=>
      {
       this.errorMsg=errorResponse;
    //   alert("aaaaaaaaaaa");
   //    alert(this.catId)
       
      }
    );

  });
  }
 
  UpdateCategory() {
    
       this.caty=Object.assign(this.caty, this.updateCategoryForm.value);

    this.categoryService.updateCategory(this.route.snapshot.params.id,this.caty).subscribe(
      (res)=>
      {
        this.router.navigate(['/Category/Index']);
    
      },
    
      (errorResponse)=>
      {
       this.errorMsg=errorResponse;
       alert("falied")
      }
    );
}
}
