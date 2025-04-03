import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
// AuthGuard é um serviço que protege as rotas do aplicativo, garantindo que apenas usuários autenticados possam acessá-las.
export class AuthGuard {

    constructor(private authService: AuthService, private router: Router) { } //método construtor para injeção de dependência
    
    canActivate(): boolean { //método que verifica se o usuário está autenticado
        if (this.authService.get()) { //verifica se o usuário está autenticado
        return true; //se o usuário estiver autenticado, permite o acesso à rota
        } else {
        this.router.navigate(['/login/login-usuario']); //se não estiver autenticado, redireciona para a página de login
        return false; //bloqueia o acesso à rota
        }
    }
}