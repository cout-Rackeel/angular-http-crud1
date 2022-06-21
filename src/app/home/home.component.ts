import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DataService]
})

export class HomeComponent implements OnInit {

  products:any = [];
  constructor(private dataService : DataService , private router : Router) { }

  ngOnInit(){

    this.dataService.sendGetRequest().subscribe( (data:any[]) =>{
      this.products = data
    });
  }

  goDetails(itemID:any){
    this.router.navigate(['details/'+itemID] )
  }



}
