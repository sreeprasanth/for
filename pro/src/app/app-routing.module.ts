import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import {LoginComponent} from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path:'products',canActivate:[AuthGuard],component:ProductListComponent},{path:'add',canActivate:[AuthGuard],component:NewProductComponent},{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
