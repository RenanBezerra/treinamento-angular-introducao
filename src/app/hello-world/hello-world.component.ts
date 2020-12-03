import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  nome: String;
  idade: number;
  tipo: string;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.nome = 'Renan';
    this.idade = 30;
    this.tipo = 'number'
  
  }

}
