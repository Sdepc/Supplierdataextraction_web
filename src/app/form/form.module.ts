import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProcessPageComponent } from './process-page/process-page.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { FormRoutingModule } from './form-routing.module';
import { SharedModule } from '../shared';
import { FilesService } from './services/files.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    FormRoutingModule,
  ],
  declarations: [HomeComponent, ProcessPageComponent, SummaryPageComponent],
  providers: [FilesService]
})
export class FormModule { }
