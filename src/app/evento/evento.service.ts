import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Area } from 'src/app/area/area.service';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  eventosUrl = "https://uniarpextensao.herokuapp.com/public/eventos";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  listar(): Promise<any>{
    console.log('listou');
    return this.http.get<any>(this.eventosUrl + `/listar`, this.httpOptions)
    .toPromise();
  }

  excluir(codEvento: number): Promise<any>{
    console.log(this.eventosUrl + `/excluir/`+codEvento);
    return this.http.delete<Evento>(`${this.eventosUrl}/excluir/${codEvento}`)
    .toPromise();
  }
}export class Evento {
  codEvento: number;
  titulo: string;
  periodoInicial: Date;
  periodofinal: Date;
  inscricaoInicio: Date;
  inscricaofim: Date;
  qtdMinInscrito: number;
  qtdMaxInscrito: number;
  modeloDoc: string;

  constructor() { }

}