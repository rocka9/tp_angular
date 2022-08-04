import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { CoreComponent } from './core/core.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
    NgbModule  // en dernier à cause de la route ** qui teste par ordre descendant
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
