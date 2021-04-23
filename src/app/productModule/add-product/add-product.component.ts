import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../Services/product.service';
import { Category } from '../../Classes/category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private fb:FormBuilder,private categoryService:ProductService) { }

  ngOnInit(): void {
  }
  addProductForm=this.fb.group({
    id:['',[]],
    name:['',[Validators.required]],
    price:['',[Validators.required]],
    color:['',[Validators.required]],
    Description:['',[Validators.required]],
    discount:['',[Validators.required]],
    Quantity:['',[Validators.required]],
    Categories:['',[Validators.required]]
  })

  get name()
  {
    return this.addProductForm.get('name')
  }
  get price()
  {
    return this.addProductForm.get('price')
  }
  get color()
  {
    return this.addProductForm.get('color')
  }
  get Description()
  {
    return this.addProductForm.get('Description')
  }
  get discount()
  {
    return this.addProductForm.get('discount')
  }
  get Quantity()
  {
    return this.addProductForm.get('Quantity')
  }
  get Categories()
  {
    return this.addProductForm.get('Categories')
  }

  get id()
  {
    return this.addProductForm.get('id')
  }

}
