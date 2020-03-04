import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './palestrante-cadastro.page.html',
  styleUrls: ['./palestrante-cadastro.page.scss'],
})
export class PalestranteCadastroPage implements OnInit {

  area = ['Marketing', 'Desenvolvimento', 'Segurança de Redes']
  palestrante = [{id:0, nome:'', email:'', cpf:'', telefone:'', area:'', informacoes:''}];

  constructor() { }

  ngOnInit() {
  }

  gravar(form: FormControl){
    console.log(this.palestrante);
  }

}
