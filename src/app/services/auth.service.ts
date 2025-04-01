import { Injectable } from "@angular/core";
import { AutenticarUsuariosRequest } from "../modules/login/models/autenticar-usuarios.request";
import { AutenticarUsuariosResponse } from "../modules/login/models/autenticar-usuarios.response";

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    //nome usado para gravar os dados do usuiário no localStorage
    auth_key: string = 'usuario_agenda';

    //função para salvar os dados do usuário no localStorage
    create(usuario: AutenticarUsuariosResponse) {
        sessionStorage.setItem(this.auth_key, JSON.stringify(usuario));
    }

    //função para recuperar os dados do usuário no localStorage
    get(): AutenticarUsuariosResponse | null {
        const usuario = sessionStorage.getItem(this.auth_key);
        if(usuario){
            return JSON.parse(usuario);
        }
        return null;
    }



}