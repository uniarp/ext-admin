import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { 
    
  }
  listarUsuario(){
  [{ id: 1, nome: 'Zorzo', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  { id: 2, nome: 'Conte', cpf: '111.222.333-44', telefone: '(49) 99999-9999', email: 'zorzo@uniarp.com.br'},
  ]
  console.log(this.listarUsuario)
  }
}
export class Usuario{
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
}
