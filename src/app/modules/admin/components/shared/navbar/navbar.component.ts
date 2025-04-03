import { Component } from '@angular/core';
import { AuthService } from '../../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  nome: string = ''; //nome do usuário logado
  email: string = ''; //email do usuário logado

  constructor(
    private authService : AuthService,
    private router: Router
  ) { } //método construtor para injeção de dependência

  ngOnInit() {    
    
    const usuario = this.authService.get(); //capturando os dados do usuário logado
    this.nome = usuario?.nome || ''; //capturando o nome do usuário logado
    this.email = usuario?.email || ''; //capturando o email do usuário logado
  }

  logout() {
    if(confirm('Deseja realmente encerrar sua sessão?')) {
      this.authService.remove(); //apagar os dados do usuário da sessão
      //redirecionar de volta para a página de login
      this.router.navigate(['/login/login-usuario'])
        .then(() => {
          location.reload();
        })
    }
  }

}
