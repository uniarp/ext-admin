import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PalestranteService, Palestrante } from '../palestrante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './palestrante-cadastro.page.html',
  styleUrls: ['./palestrante-cadastro.page.scss'],
})
export class PalestranteCadastroPage implements OnInit {

  area = ['Marketing', 'Desenvolvimento', 'Segurança de Redes'];
  palestrante = new Palestrante();

  constructor(
    public palestranteService: PalestranteService,
    private router: Router,
    public toast: ToastController
  ) { }

  ngOnInit() {

  }

  gravar(form: FormControl) {
    this.palestranteService.adicionarPalestrante(this.palestrante)
      .then(data => {
        console.log(data);
        this.router.navigate(['palestrante-pesquisa']);
        this.alerta('Usuário Cadastrado com Sucesso', 'success');
      })
      .catch(erro => this.alerta(`Erro ao cadastrar ${erro}`, 'danger'));

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
