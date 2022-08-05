import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ProductsListComponent } from './Products/products-list/products-list.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  {
    path: 'products',
    component: ProductsListComponent,
    data: {
      title: 'Products List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


