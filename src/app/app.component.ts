import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'treinamento-angular';
  nome = '';

  validar(){
    console.log(this.nome)
  }
}
