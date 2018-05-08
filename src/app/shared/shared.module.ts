import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StepsComponent } from './steps/steps.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    StepsComponent
  ],
  exports:[
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    StepsComponent
  ]
})
export class SharedModule { }
