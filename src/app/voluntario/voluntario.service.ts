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
    return this.http.post<Voluntario>(`${this.voluntarioUrl}/cadastrar`,voluntario)
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
