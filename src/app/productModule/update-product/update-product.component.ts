import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../Classes/product';
import { ProductService } from '../../../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/Classes/category';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  errorMsg: any;
  product:Product;
  imageURL:string="../assets/image/img.jpeg";
  fileToUpload:File;

  constructor(private fb:FormBuilder,private productService:ProductService,
    private route: ActivatedRoute ,private router: Router, private catServicee:CategoryService) {

   }

  updateProductForm=this.fb.group({
    id:['',[]],
    name:['',[Validators.required]],
    price:['',[Validators.required]],
    color:['',[Validators.required]],
    Description:['',[Validators.required]],
    discount:['',[Validators.required]],
    Quantity:['',[Validators.required]],
    Categories:['',[Validators.required]],

  })

  get name()
  {
    return this.updateProductForm.get('name')
  }
  get price()
  {
    return this.updateProductForm.get('price')
  }
  get color()
  {
    return this.updateProductForm.get('color')
  }
  get Description()
  {
    return this.updateProductForm.get('Description')
  }
  get discount()
  {
    return this.updateProductForm.get('discount')
  }
  get Quantity()
  {
    return this.updateProductForm.get('Quantity')
  }

  get Categories()
  {
    return this.updateProductForm.get('Categories')
  }

  get id()
  {
    return this.updateProductForm.get('id')
  }
  categoryList:Category[];

productId:number;
  ngOnInit(): void {
    this.catServicee.returnAllCategory().subscribe
    ( categoryData=>
      {
        this.categoryList=categoryData;
        for(var i=0;i<this.categoryList.length;i++){
          console.log(this.categoryList[i]);
          alert( this.categoryList)
        }
      },
      errorResponse=>
      {
    //   this.error=errorResponse;
    console.log('failed');
      }
    );

    this.route.queryParams.subscribe(params => {
 this.productId= this.route.snapshot.params['id'];;
     this.productService.getProductById(this.productId).subscribe(
      (res)=>
      {
        this.product=res;
     //   alert(this.caty.Name);
        this.updateProductForm.controls['name'].setValue(this.product.Name);
        this.updateProductForm.controls['price'].setValue(this.product.Price);
        this.updateProductForm.controls['color'].setValue(this.product.Color);
        this.updateProductForm.controls['Description'].setValue(this.product.Description);
        this.updateProductForm.controls['discount'].setValue(this.product.Discount);
        this.updateProductForm.controls['Quantity'].setValue(this.product.Quantity);
        this.updateProductForm.controls['Categories'].setValue(this.product.Categories);







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

  UpdateProduct() {

       this.product=Object.assign(this.product, this.updateProductForm.value);

    this.productService.updateProduct(this.route.snapshot.params.id,this.product).subscribe(
      (res)=>
      {
        this.router.navigate(['/Product/Index']);

      },

      (errorResponse)=>
      {
       this.errorMsg=errorResponse;
       alert("falied")
      }
    );
}
}
