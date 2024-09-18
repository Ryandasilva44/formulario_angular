import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  formulario: FormGroup;
  mensagem: string | null = null;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensagem: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.mensagem = 'Formulário enviado com sucesso!';
      this.formulario.reset();
    } else {
      this.mensagem = 'Por favor, preencha todos os campos corretamente';
    }
  }
}
