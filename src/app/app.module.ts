import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './Shared/Shared.module';



@NgModule({
  declarations: [
    AppComponent,
   // ProductsComponent,
    // SharedComponent
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
