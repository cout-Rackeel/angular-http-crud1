import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PurchaseComponent } from './purchase/purchase.component';


const routes: Routes = [
  {path:'' , redirectTo: 'home', pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'purchase', component:PurchaseComponent},
  {path:'contact', component:ContactComponent},
  {path:'products',
    children:[
      {path:'add' , component:AddProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
