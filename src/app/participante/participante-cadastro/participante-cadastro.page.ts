import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ParticipanteServiceService } from '../participante-service.service';

@Component({
  selector: 'app-participante-cadastro',
  templateUrl: './participante-cadastro.page.html',
  styleUrls: ['./participante-cadastro.page.scss'],
})
export class ParticipanteCadastroPage implements OnInit {

  constructor(
    private participanteService: ParticipanteServiceService
  ) { }

  ngOnInit() {
  }

  cadastrar() {
    this.participanteService.cadastrar()
      .then(() => {

      })
      .catch(() => null);
  }

  gravar(form: FormControl) {
    this.participanteService.cadastrar()
      .then(user => {
        console.log(user)
      });
  }

}
