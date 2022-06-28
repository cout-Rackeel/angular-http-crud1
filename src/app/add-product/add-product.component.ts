import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { product } from 'product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers:[DataService]
})

export class AddProductComponent implements OnInit {

  productForm !: FormGroup
  length!:any

  constructor(
    private dataService : DataService,
    private router : Router
    ) { }


  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data:product[]) => {
      this.length = data.length+1;
    })

   this.initializeForm()
  }


  initializeForm(){
    this.productForm = new FormGroup({
      id: new FormControl(this.length,[]),
      name : new FormControl('',[Validators.required]),
      price : new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      image:new FormControl('',[]),
      quantity:new FormControl('',[Validators.required]),
    })

  }

  get id(){ return this.productForm.get('id')}
  get name(){ return this.productForm.get('name')}
  get price(){ return this.productForm.get('price')}
  get image(){ return this.productForm.get('image')}
  get quantity(){ return this.productForm.get('quantity')}


  add(){
    if(this.productForm.valid){

      this.productForm.value.id = this.length+100

      let newForm = this.productForm

      console.log(newForm.value);

      this.dataService.addItem(newForm.value).subscribe({
        next:(res:any) => {
          res.id = this.length
          alert('Product added' + ' ' + JSON.stringify(res));
          console.log(this.productForm);
          this.productForm.reset();
          this.router.navigate(['/']);
        },
        error:(err:any) => {
          alert('Sorry had trouble submitting product')
        }
      })
    }

  }

}
