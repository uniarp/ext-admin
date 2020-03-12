import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ParticipanteServiceService, Participante } from '../participante-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-participante-cadastro',
  templateUrl: './participante-cadastro.page.html',
  styleUrls: ['./participante-cadastro.page.scss'],
})
export class ParticipanteCadastroPage implements OnInit {

  participante = new Participante();
  confirSenha: string;
  password_type = 'password';

  constructor(
    public participanteService: ParticipanteServiceService,
    private router: Router,
    public toast: ToastController
  ) { }

  ngOnInit() {
  }

  exibeSenha() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }

  gravar(form: FormControl) {
    this.participante.codParticipante = null;
    this.participanteService.cadastrar(this.participante)
      .then(user => {
        console.log(user)
        this.alerta('Participante Cadastrado com Sucesso', 'success');
        this.router.navigate(['participante-pesquisa']);
      })
      .catch( erro => this.alerta(`Problema ao Cadastrar ${erro}`, 'danger'));
  }

  async alerta(men: string, cor: string) {
    const toast = await this.toast.create({
      message: men,
      duration: 1500,
      color: cor
    });
    toast.present();
  }

}
