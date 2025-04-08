import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";


//Endpoints que exigem token
const endpointsQueExigemToken = [
    "/api/tarefas"
];


//Criando o interceptor (sintaxe de função lambda)
export const AuthInterceptor: HttpInterceptorFn = (req, next) => {


    //injeção de dependência
    const authService = inject(AuthService);


    //TODO Implementar o interceptor para adicionar o token de autenticação


    return next(req);
}



