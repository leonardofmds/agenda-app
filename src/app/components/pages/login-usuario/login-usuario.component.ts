import { Component } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-login-usuario',
  imports: [],
  templateUrl: './login-usuario.component.html',
  styleUrl: './login-usuario.component.css'
})
export class LoginUsuarioComponent {

  constructor(private service: UsuariosService) { //injeção de dependencia

  }
}
