import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CadastroUsuarioRequest } from "../models/cadastro-usuarios.request";
import { CadastroUsuarioResponse } from "../models/cadastro-usuario.response";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    constructor(private httpClient: HttpClient) { //injeção de dependencia
        
    }


    //Método para cadastrar um usuário
    cadastrarUsuario(request: CadastroUsuarioRequest) : Observable<CadastroUsuarioResponse>{
        return this.httpClient.post<CadastroUsuarioResponse>(environment.apiUsuarios, request);
    }
}