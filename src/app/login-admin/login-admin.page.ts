import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }
  acessar(){
    this.router.navigate(['evento-pesquisa']);
  }
}
