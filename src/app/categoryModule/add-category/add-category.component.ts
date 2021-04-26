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
  categoryList:Category []=[];
  errorMsg: any;
  dataSaved=false;
  massage: string;
  CategoryId: number=0;
  addCategoryForm:any;
  ngOnInit(): void {
    this.addCategoryForm=this.fb.group({
      name:['',[Validators.required]]
    })
   this.getCategory();
 
  }
  getCategory(){
    this.categoryService.returnAllCategory().subscribe((Data)=>{
      this.categoryList=Data;
    },(err)=>{
    this.errorMsg=err;
    })
  }
Reset() {  
  this.addCategoryForm.reset();  
 } 
addCategory(category: Category) {  
  debugger;  
  category.ID = this.CategoryId;  
  this.categoryService.addCategory(category).subscribe(  
   () => {  
    this.dataSaved = true;  
    this.massage = 'Record saved Successfully';  
    this.getCategory();  
    this.Reset();  
    this.CategoryId = 0;  
   });  
   this.router.navigate(['/Category/Index']);
 } 


}
