import { AlertController } from '@ionic/angular';
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
  areaPalestrante: any[] = [];

  constructor(
    public palestranteService: PalestranteService,
    public areaService: AreaService,
    private router: Router,
    private route: ActivatedRoute,
    private handler: ErrorHandlerService,
    private alert: AlertsService,
    private alertController: AlertController
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
        for (let d of this.area) {
          this.areaSelec.push({
            name: d.nome,
            type: 'checkbox',
            label: d.nome,
            value: d,
            checked: d.checked
          });
        }
      })
      .catch(erro => this.handler.handleError(`Erro ao cadastrar ${erro}`));
  }

  carregarPalestrante(codPalestrante: number) {
    this.palestranteService.carregarPalestrante(codPalestrante)
      .then(data => {
        this.palestrante = data;
        this.areaPalestrante = data.area;
      })
      .catch(erro => this.handler.handleError(erro));
  }

  gravar() {
    this.palestrante.codPalestrante = this.palestrante.codPalestrante ? this.palestrante.codPalestrante : null;
    this.palestrante.area = this.areaPalestrante;
    this.palestranteService.adicionarPalestrante(this.palestrante)
      .then(() => {
        this.alert.alertaToast(this.palestrante.codPalestrante ? 'Palestrante Alterado com Sucesso' : 'Palestrante Cadastrado com Sucesso',
          'success');
        this.router.navigate(['palestrante-pesquisa']);
      })
      .catch(erro => this.handler.handleError(erro));
  }

  removerArea(codArea){
    this.areaPalestrante = this.areaPalestrante.filter(elemento => {
      return elemento.codArea !== codArea;
    });
  }

  async mostarAreas() {
    const alert = await this.alertController.create({
      header: 'Selecione Área(s)',
      inputs: this.areaSelec,
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Ok',
          handler: (data) => {
            for(let a of data){
              this.areaPalestrante.push(a);
            }
            console.log(this.areaPalestrante);
          }
        }
      ]
    });

    await alert.present();
  }
}
