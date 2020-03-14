import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoluntarioService {

  voluntarioUrl = "https://uniarpextensao.herokuapp.com/public/voluntarios";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  cadastrar(voluntario: Voluntario): Promise<Voluntario>{
    console.log(voluntario); 
    return this.http.get<Voluntario>(`${this.voluntarioUrl}/cadastrar` + '/this.nome' + '/email' + '/cpf' + '/telefone' + '/ra' + '/curso')
      .toPromise();
  }

}

  export class Voluntario {
    codVoluntario: number;
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    ra: number;
    curso: string
}
