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

 
<<<<<<< HEAD
  constructor(private fb: FormBuilder,private categoryService:CategoryService) { }
  categoryList:Category []=[];
  errorMsg: any;
  dataSaved=false;
  massage: string;
  CategoryId: number=0;
  addCategoryForm:any;
=======
  constructor(private fb:FormBuilder,private categoryService:CategoryService,private router :Router) { }
>>>>>>> 9db31a7c1ed554d182c58f228987bf193ed633e8

  ngOnInit(): void {
    this.addCategoryForm=this.fb.group({
      name:['',[Validators.required]]
    })
   this.getCategory();
 
  }
<<<<<<< HEAD
  getCategory(){
    this.categoryService.returnAllCategory().subscribe((Data)=>{
      this.categoryList=Data;
    },(err)=>{
    this.errorMsg=err;
    })
=======
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
>>>>>>> 9db31a7c1ed554d182c58f228987bf193ed633e8
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
 } 


}
