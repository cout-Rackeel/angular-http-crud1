import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})



export class DetailsComponent implements OnInit {
  product:any;

  constructor(private dataService: DataService,
              private activatedRoute : ActivatedRoute,
              private router : Router
              ) { }

  ngOnInit() {
    this.listItem();
  }

  listItem(){

    // const routeParams = this.activatedRoute.snapshot.paramMap;
    // const productId = Number(routeParams.get('id'));

    //* Better alternative - this.route.snapshot.params['<paramNm>']
    const id = this.activatedRoute.snapshot.params['id'];

    this.dataService.getItem(id).subscribe( (data:product) => {
        this.product = data
      });
  }

  goPurchases(){
    this.router.navigate(['purchase'])
  }




}
