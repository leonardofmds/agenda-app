/*
    Objeto de modelo de dados para a requisição 
    de cadastro de usuário da API
*/
export interface CadastroUsuarioRequest{
    nome: string;
    email: string;
    senha: string;
}