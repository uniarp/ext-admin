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
  listar(): Promise<Atividade> {
    return this.http.get<Atividade>(this.atividadeUrl + '/listar')
      .toPromise();
  }

  listaAtividade(codAtividade: number): Promise<Atividade>{
    console.log("mee")
    return this.http.get<Atividade>(`${this.atividadeUrl}/listar/${codAtividade}`)
    .toPromise()
    .then( res => {
      return res[0];
    });
  }

  excluirAtividade(codAtividade: number): Promise<string>{
    return this.http.delete<string>(`${this.atividadeUrl}/excluir/${codAtividade}`)
      .toPromise()
      .then( res => res);
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
  evento: any[];

  constructor () {
    this.codAtividade = null;
    this.localizacao = '';
    this.descricao = '';
    this.palestrante = [];
  }
}