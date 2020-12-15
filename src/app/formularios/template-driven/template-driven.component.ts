import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {
    model = {
      nome: '',
      email: '',
      idade: 0,

    };

    msgErroNome = '';
    msgErroIdade = '';

  constructor() {}

  salvar(){

    if(this.validar()){
    console.log(this.model);
    }
  }


  validar(){
    let valid = true;
    if(this.model.nome.length < 3){
      this.msgErroNome = 'Nome precisa ter 3 letras';
      valid = false;
    }
    if(this.model.idade <= 0){
      this.msgErroIdade = 'A idade tem que ser maior que 0';
      valid = false;
    }

    if(valid){
    this.msgErroNome = '';
    this.msgErroIdade = '';

    }
    return valid;
  }
}
