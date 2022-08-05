import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './Shared.component';
import { ButoonLinkComponent } from './butoon-link/butoon-link.component';
import { ButtonLinkComponent } from './button-link/button-link.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent, ButoonLinkComponent, ButtonLinkComponent]
})
export class SharedModule { }
