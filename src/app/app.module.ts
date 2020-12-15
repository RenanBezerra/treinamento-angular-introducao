import { AppRouterModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ListaContasComponent } from './lista-contas/lista-contas.component';
import { ContaComponent } from './lista-contas/conta/conta.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormulariosModule } from './formularios/formularios.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ListaContasComponent,
    ContaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule, FormulariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
