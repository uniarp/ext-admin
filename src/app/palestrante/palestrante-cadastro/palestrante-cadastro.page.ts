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

  area = ['Marketing', 'Desenvolvimento', 'Segurança de Redes']
  palestrante: Palestrante;

  constructor(
    public palestranteService: PalestranteService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.palestrante = new Palestrante();
  }

  gravar(form: FormControl, palestrante){
    console.log(form);
  this.palestranteService.adicionar(form.value)
  .then(data => console.log(data));
  this.router.navigate(['palestrante-pesquisa']);
  alert("Palestrante Cadastrado");
  }

}
