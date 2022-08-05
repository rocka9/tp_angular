import { Routes } from "@angular/router";
import { ProductsListComponent } from "./products-list/products-list.component";


const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
    data: {
      title: 'Products List'
    }
  }
];
