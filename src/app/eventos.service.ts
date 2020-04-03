import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  eventoUrl = "https://uniarpextensao.herokuapp.com/public/eventos";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  listaEvento(codEvento: number): Promise<Evento> {
    return this.http.get<Evento>(`${this.eventoUrl}/listar/${codEvento}`)
      .toPromise()
      .then(data => {
        return data[0];
      });
  }

  cadastrar(evento: Evento): Promise<Evento> {
    console.log(evento);
    return this.http.post<Evento>(`${this.eventoUrl}/cadastrar`, evento)
      .toPromise();
  }

  pesquisar(): Promise<Evento> {
    return this.http.get<Evento>(this.eventoUrl + '/listar')
      .toPromise();
  }

  excluir(codEvento: number): Promise<Evento> {
    return this.http.delete<Evento>(`${this.eventoUrl}/excluir/${codEvento}`)
      .toPromise();
  }
}

export class Evento {
  codEvento: number;
  titulo: string;
  periodoInicial: Date;
  periodofinal: Date;
  inscricaoInicio: Date;
  inscricaofim: Date;
  qtdMinInscrito: number;
  qtdMaxInscrito: number;
  modeloDoc: string;
}