import { Component, OnInit } from '@angular/core';
import { ParticipanteServiceService, Participante } from '../participante-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';

@Component({
  selector: 'app-participante-pesquisa',
  templateUrl: './participante-pesquisa.page.html',
  styleUrls: ['./participante-pesquisa.page.scss'],
})
export class ParticipantePesquisaPage implements OnInit {

  participante: Participante;

  constructor(
    private participanteService: ParticipanteServiceService,
    public router: Router,
    private route: ActivatedRoute,
    public handler: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.listar();
  }

  inserir() {
    this.router.navigate(['participante-cadastro']);
  }

  async listar() {
    this.participante = await this.participanteService.listar();
  }

  async excluir(codParticipante) {
    console.log(codParticipante);
    this.participante = await this.participanteService.excluir(codParticipante);
    this.listar();
  }

  novoCadastro() {
    this.router.navigate(['participante-cadastro']);
  }

  async alterar(codParticipante) {
    console.log(codParticipante);
    this.router.navigate(['/participante-cadastro/', codParticipante]);
  }
}
