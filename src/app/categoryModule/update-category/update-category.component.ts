import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Classes/category';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {

  errorMsg: any;
  constructor(private fb:FormBuilder,private categoryService:CategoryService, private route: ActivatedRoute ,private router: Router) { }
  updateCategoryForm=this.fb.group({
    id:['',[]],
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
  ngOnInit(): void {
  }
  category:Category;
  UpdateCategory() {
    //alert(this.category.ID);
    this.category.ID=this.id?.value;
    this.category.Name=this.name?.value;
    this.categoryService.updateCategory(this.route.snapshot.params.id,this.category).subscribe(
      (res)=>
      {
        this.router.navigate(['/Category/Index']);
      },
    
      (errorResponse)=>
      {
       this.errorMsg=errorResponse;
      }
    );
}
}
