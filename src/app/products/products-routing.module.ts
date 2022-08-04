import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductsCompareComponent } from "./products-compare/products-compare.component";
import { ProductsDetailsComponent } from "./products-details/products-details.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsSearchComponent } from "./products-search/products-search.component";


const routes: Routes = [
  {
    path: 'products'
    component: ProductsListComponent,
  },
  {
    path: 'products/search'
    component: ProductsSearchComponent,
  },
  {
    path: 'products/compare'
    component: ProductsCompareComponent,
  },
  {
    path: 'products/productId'
    component: ProductsDetailsComponent ,
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
