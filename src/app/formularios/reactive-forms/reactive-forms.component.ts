import { MeuServicoService } from './../meu-servico.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private servico: MeuServicoService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nomeDoUsuario: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      idade: ['', [Validators.required, Validators.min(0)]],
    });
  }

  salvar(){
    console.log(this.form)
    if (this.form.valid){
      this.servico.salvarCadastro(this.form.getRawValue())
      .subscribe((data) => {
        alert('Cadastro salvo com sucesso');
      },
      (erro) => {
        alert('Ocorreu um erro ao salvar!');
      })
    }
  }

}
