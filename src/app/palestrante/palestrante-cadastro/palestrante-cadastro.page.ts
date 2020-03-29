import { Usuario } from './../../usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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

  area: Array<Area>;
  palestrante = new Palestrante();
  areaSelec = [];

  constructor(
    public palestranteService: PalestranteService,
    public areaService: AreaService,
    private router: Router,
    private route: ActivatedRoute,
    private handler: ErrorHandlerService,
    private alert: AlertsService
  ) { }

  ngOnInit() {
    const codPalestrante = this.route.snapshot.params['codPalestrante'];

    if (codPalestrante) {
      this.carregarPalestrante(codPalestrante);
    }
    this.buscaArea();
  }

  get editando() {
    return Boolean(this.palestrante.codPalestrante);
  }

  buscaArea() {
    this.areaService.listarArea()
      .then(data => {
        this.area = data;
      })
      .catch(erro => this.handler.handleError(`Erro ao cadastrar ${erro}`));
  }

  carregarPalestrante(codPalestrante: number) {
    this.palestranteService.carregarPalestrante(codPalestrante)
      .then(data => {
        this.palestrante = data;
      })
      .catch(erro => this.handler.handleError(erro));
  }

  gravar() {
    this.palestrante.codPalestrante = this.palestrante.codPalestrante ? this.palestrante.codPalestrante : null;
    this.palestranteService.adicionarPalestrante(this.palestrante)
      .then(() => {
        this.alert.alertaToast(this.palestrante.codPalestrante ? 'Palestrante Alterado com Sucesso' : 'Palestrante Cadastrado com Sucesso',
          'success');
        this.router.navigate(['palestrante-pesquisa']);
      })
      .catch(erro => this.handler.handleError(erro));
  }

  categoriasSelect(o1, o2) {
    return o1 && o2 ? o1.codArea = o2.codArea : o1 === o2;
  }

}
