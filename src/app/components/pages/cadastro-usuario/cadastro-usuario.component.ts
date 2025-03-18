import { Component } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CadastroUsuarioRequest } from '../../../models/cadastro-usuarios.request';

@Component({
  selector: 'app-cadastro-usuario',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent {

  form: FormGroup;

  constructor(
    private service: UsuariosService, //injeção de dependencia
    private formBuilder: FormBuilder) { //injeção de dependencia
    //criando o formularios

    this.form = this.formBuilder.group({
      nome: new FormControl(''), //campo nome
      email: new FormControl(''), //campo email
      senha: new FormControl('') //campo senha
    });
  }

  onSubmit() {
    console.log(this.form.value);

    const request : CadastroUsuarioRequest = {
      nome: this.form.value.nome, //pegando o valor do campo nome
      email: this.form.value.email, //pegando o valor do campo email
      senha: this.form.value.senha //pegando o valor do campo senha
    }

    this.service.cadastrarUsuario(request).subscribe(response => {
      console.log(response);
    });


  }


}
