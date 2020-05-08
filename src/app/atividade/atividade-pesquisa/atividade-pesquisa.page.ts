import { Component, OnInit } from '@angular/core';
import { ParticipanteServiceService, Participante } from 'src/app/participante/participante-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
import { Atividade, AtividadeService } from '../atividade.service';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-atividade-pesquisa',
  templateUrl: './atividade-pesquisa.page.html',
  styleUrls: ['./atividade-pesquisa.page.scss'],
})
export class AtividadePesquisaPage implements OnInit {

  atividade: Atividade;
  participante: Participante;
  evento: any[] = [];

  constructor(
    private participanteService: ParticipanteServiceService,
    private atividadeService: AtividadeService,
    private erroHandler: ErrorHandlerService,
    public router: Router,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    public handler: ErrorHandlerService
  ) { }

  ngOnInit() {
    console.log("teste")
    this.listar();
    // const codAtividade = this.route.snapshot.params['codAtividade'];
    // console.log(this.listaAtividade)
    // this.listaAtividade(codAtividade);

  }

  public async listar() {
    this.atividade = await this.atividadeService.listar();
    console.log(this.atividade);
  }

  public async listaAtividade(codAtividade: number) {
    console.log("TESTE");
    this.atividadeService.listaAtividade(codAtividade)
    .then(data => {
      console.log(data);
      this.atividade = data;
      this.evento = this.atividade.evento;
    })
  }

}
