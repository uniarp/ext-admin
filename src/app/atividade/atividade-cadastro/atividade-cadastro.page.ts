import { Palestrante, PalestranteService } from './../../palestrante/palestrante.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ErrorHandlerService } from './../../core/services/error-handler.service';
import { Atividade } from './../atividade.service';
import { TipoAtividadeService } from './../../tipoAtividade/tipo-atividade.service';
import { AtividadeService } from '../atividade.service';
import { AlertsService } from 'src/app/core/services/alerts.service';

@Component({
  selector: 'app-atividade-cadastro',
  templateUrl: './atividade-cadastro.page.html',
  styleUrls: ['./atividade-cadastro.page.scss'],
})
export class AtividadeCadastroPage implements OnInit {

  atividade = new Atividade();
  tipoAtividade: any[];
  palestrante: any[];
  dataInicio = "";
  horaIni = "";
  dataFim = "";
  horaFim = "";

  constructor(
    private atividadeService: AtividadeService,
    private tpAtividadeService: TipoAtividadeService,
    private palestranteService: PalestranteService,
    private alert: AlertsService,
    private handler: ErrorHandlerService,
  ) { }

  ngOnInit() {
    this.carregarTpAtividade();
    this.carregarPalestrantes();
  }

  carregarTpAtividade() {
    this.tpAtividadeService.listaTpAtividade()
      .then(data => {
        console.log(data);
        this.tipoAtividade = data;
      })
      .catch(erro => this.handler.handleError(erro));
  }
  carregarPalestrantes(){
    this.palestranteService.listar()
      .then(data => this.palestrante = data)
      .catch(erro => this.handler.handleError(erro));
  }

  gravar(form: NgForm) {
    console.log(this.atividade);
    console.log(this.dataInicio);
    console.log(this.horaIni);
    console.log(this.dataFim);
    console.log(this.horaFim);
  }


  pegaData(){
    let dtIn: string;
    let hrIn: string;
    let dtF: string;
    let hrF: string;


  }
}
