import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/Shared.module';
import { ProductsCompareComponent } from './products-compare/products-compare.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsSearchComponent } from './products-search/products-search.component';
import { ProductsComponent } from './Products.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ProductsComponent, ProductsSearchComponent, ProductsListComponent, ProductsCompareComponent, ProductsDetailsComponent]
})
export class ProductsModule { }
