import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit {

  
  @Input() valor;

  @Output() novoValor: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.valor= this.valor + 10
    this.novoValor.emit(this.valor);
  }

  remover() {
    this.valor = this.valor - 10
    this.novoValor.emit(this.valor);
  }

}
