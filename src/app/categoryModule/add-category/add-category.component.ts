import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/Classes/category';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {



  
  constructor(private fb:FormBuilder,private categoryService:CategoryService) { }

  ngOnInit(): void {
  }
  addCategoryForm=this.fb.group({
    name:['',[Validators.required]]

  })
  addCategory()
  {
           var cat=new Category(this.name?.value)
           this.categoryService.addCategory(cat).subscribe
            (data =>
               {alert("Succesfully Added Category details")},Error => {alert("failed while adding Category details")}
           );
  }
  get name()
  {
    return this.addCategoryForm.get('name')
  }

}
