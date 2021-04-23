import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/Classes/category';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
 
  constructor(private fb:FormBuilder,private categoryService:CategoryService,private router :Router) { }

  ngOnInit(): void {
  }
  addCategoryForm=this.fb.group({
    id:['',[]],
    name:['',[Validators.required]]

  })
  addCategory()
  {
           var cat=new Category(this.id?.value,this.name?.value)
           this.categoryService.addCategory(cat).subscribe
            (data =>
               {alert("Succesfully Added Category details")},Error => {alert("failed while adding Category details")}
           );
           this.router.navigate(['/Category/Index']);
  }
  get name()
  {
    return this.addCategoryForm.get('name')
  }
  get id()
  {
    return this.addCategoryForm.get('id')
  }

}
