import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AreaService, Area } from './../../area/area.service';
import { PalestranteService, Palestrante } from '../palestrante.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { AlertsService } from 'src/app/core/services/alerts.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './palestrante-cadastro.page.html',
  styleUrls: ['./palestrante-cadastro.page.scss'],
})
export class PalestranteCadastroPage implements OnInit {

  areas: Array<Area>;
  palestrante = new Palestrante();

  constructor(
    public palestranteService: PalestranteService,
    public areaService: AreaService,
    private router: Router,
    private handler: ErrorHandlerService,
    private alert: AlertsService
  ) { }

  ngOnInit() {
    this.buscaArea();
  }

  buscaArea() {
    this.areaService.listarArea()
      .then(data => {
        console.log(data);
        this.areas = data;
      })
      .catch(erro => this.handler.handleError(`Erro ao cadastrar ${erro}`));
  }

  gravar(form: FormControl) {
    this.palestrante.codPalestrante = null;
    this.palestranteService.adicionarPalestrante(this.palestrante)
      .then(() => {
        this.router.navigate(['palestrante-pesquisa']);
        this.alert.alertaToast('Usuário Cadastrado com Sucesso', 'success');
      })
      .catch(erro => this.handler.handleError(`Erro ao cadastrar ${erro}`));

  }

}
