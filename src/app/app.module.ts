import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './Shared/Shared.module';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { ProductsComponent } from './Products/Products.component';
import { ProductsCompareComponent } from './Products/products-compare/products-compare.component';
import { ProductsDetailsComponent } from './Products/products-details/products-details.component';
import { ProductsListComponent } from './Products/products-list/products-list.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    TopBarComponent,
    ProductsComponent,
    ProductsCompareComponent,
    ProductsDetailsComponent,
    ProductsListComponent,


  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule  // en dernier à cause de la route ** qui teste par ordre descendant
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
