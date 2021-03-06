import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Participante } from '../participante/participante-service.service';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  static emitirEventReconsultar = new EventEmitter();
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

  listar(): Promise<Evento> {
    return this.http.get<Evento>(this.eventoUrl + '/listar')
      .toPromise();
  }

  listarInscritos(codEvento: number): Promise<any> {
    return this.http.get<any>(`${this.eventoUrl}/listarInscritos/${codEvento}`)
      .toPromise();
  }

  excluir(codEvento: number): Promise<Evento> {
    return this.http.delete<Evento>(`${this.eventoUrl}/excluir/${codEvento}`)
      .toPromise();
  }

  validar(listaEvento: any): Promise<Evento> {
    return this.http.post<Evento>(`${this.eventoUrl}/presenca`, listaEvento)
      .toPromise();
  }

  removerInscriEvento(codParticipanteEvt: number) {
    return this.http.delete<Evento>(`${this.eventoUrl}/removerInscrito/${codParticipanteEvt}`)
      .toPromise();
  }
  cancelar(codEvento: number): Promise<Evento> {
    return this.http.get<Evento>(`${this.eventoUrl}/cancelar/${codEvento}`)   //Por hora somente o status esta mudando para cancelado de 1 para "6"
    .toPromise()
  }
}

export class Evento {
  codEvento: number;
  titulo: string;
  codArea: any[];
  periodoInicial: string;
  periodoFinal: string;
  inscricaoInicio: string;
  inscricaoFim: string;
  qtdMinInscrito: number;
  qtdMaxInscrito: number;
  modeloDoc: string;
  voluntario: any[];
  atividades: any[];
  validar: any[];


  constructor() {
    this.codEvento = null;
    this.voluntario = [];
    this.atividades = [];
    this.validar = [];
    this.modeloDoc = '';

  }
}