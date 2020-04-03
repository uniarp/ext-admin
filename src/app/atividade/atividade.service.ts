import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Timestamp } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  atividadeUrl = 'http://uniarpextensao.herokuapp.com/public/atividades';
  constructor(
    private http: HttpClient,
  ) { }

  gravar(atividade: Atividade){
    return this.http.post<Atividade>(`${this.atividadeUrl}/cadastrar`, atividade)
    .toPromise()
    .then( res => {
      return res[0];
    })
  }
  listaAtividade(codAtividade: number): Promise<Atividade>{
    return this.http.get<Atividade>(`${this.atividadeUrl}/listar/${codAtividade}`)
    .toPromise()
    .then( res => {
      return res[0];
    });
  }

}

export class Atividade {
  codAtividade: number;
  titulo: string;
  codTipo: number;
  nomeTipo: string;
  dataInicio: string;
  dataFim: string;
  localizacao: string;
  descricao: string;
  palestrante: any[];

  constructor () {
    this.codAtividade = null;
    this.localizacao = '';
    this.descricao = '';
    this.palestrante = [];
  }
}