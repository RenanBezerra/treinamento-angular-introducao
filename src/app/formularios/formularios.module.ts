import { MeuServicoService } from './meu-servico.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';



@NgModule({
  declarations: [
    ReactiveFormsComponent,
    TemplateDrivenComponent
  ],

  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],

  providers: [MeuServicoService],

  exports: [
    TemplateDrivenComponent,
    ReactiveFormsComponent
  ],
})
export class FormulariosModule { }
