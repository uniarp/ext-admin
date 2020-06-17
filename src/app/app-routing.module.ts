import { GuardAuthGuard } from './guard/guard-auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login-admin']);

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', redirectTo: 'login-admin', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'palestrante-cadastro',
    loadChildren: () => import('./palestrante/palestrante-cadastro/palestrante-cadastro.module')
      .then(m => m.PalestranteCadastroPageModule),
    canActivate: [GuardAuthGuard]

  },
  {
    path: 'palestrante-pesquisa',
    loadChildren: () => import('./palestrante/palestrante-pesquisa/palestrante-pesquisa.module')
      .then(m => m.PalestrantePesquisaPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'voluntario-cadastro',
    loadChildren: () => import('./voluntario/voluntario-cadastro/voluntario-cadastro.module')
      .then(m => m.VoluntarioCadastroPageModule),
      canActivate: [GuardAuthGuard]
  },
  {
    path: 'voluntario-cadastro/:id',
    loadChildren: () => import('./voluntario/voluntario-cadastro/voluntario-cadastro.module')
      .then(m => m.VoluntarioCadastroPageModule),
      canActivate: [GuardAuthGuard]
  },
  {
    path: 'voluntario-pesquisa',
    loadChildren: () => import('./voluntario/voluntario-pesquisa/voluntario-pesquisa.module')
      .then(m => m.VoluntarioPesquisaPageModule),
      canActivate: [GuardAuthGuard]
  },
  {
    path: 'usuario-cadastro',
    loadChildren: () => import('./usuario/usuario-cadastro/usuario-cadastro.module')
    .then(m => m.UsuarioCadastroPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'usuario-pesquisa',
    loadChildren: () => import('./usuario/usuario-pesquisa/usuario-pesquisa.module')
    .then(m => m.UsuarioPesquisaPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'voluntario-pesquisa',
    loadChildren: () => import('./voluntario/voluntario-pesquisa/voluntario-pesquisa.module')
      .then(m => m.VoluntarioPesquisaPageModule),
      canActivate: [GuardAuthGuard]
  },
  {
    path: 'participante-cadastro',
    loadChildren: () => import('./participante/participante-cadastro/participante-cadastro.module')
    .then(m => m.ParticipanteCadastroPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'participante-cadastro/:id',
    loadChildren: () => import('./participante/participante-cadastro/participante-cadastro.module')
    .then(m => m.ParticipanteCadastroPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'participante-pesquisa',
    loadChildren: () => import('./participante/participante-pesquisa/participante-pesquisa.module')
    .then(m => m.ParticipantePesquisaPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'evento-cadastro',
    loadChildren: () => import('./evento/evento-cadastro/evento-cadastro.module')
    .then(m => m.EventoCadastroPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'atividade-cadastro',
    loadChildren: () => import('./atividade/atividade-cadastro/atividade-cadastro.module')
    .then(m => m.AtividadeCadastroPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'evento-pesquisa',
    loadChildren: () => import('./evento/evento-pesquisa/evento.module')
    .then(m => m.EventoPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'inscricao-participante/:codParticipante/:codEvento',
    loadChildren: () => import('./inscricao-participante/inscricao-participante.module')
    .then(m => m.inscricaoParticipantePageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'evento-cancelar',
    loadChildren: () => import('./evento/evento-cancelar/evento-cancelar.module')
    .then(m => m.EventoCancelarPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'lista-inscritos',
    loadChildren: () => import('./evento/lista-inscritos/lista-inscritos.module')
    .then(m => m.ListaInscritosPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'atividade-pesquisa',
    loadChildren: () => import('./atividade/atividade-pesquisa/atividade-pesquisa.module')
    .then(m => m.AtividadePesquisaPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'validar-frequencia',
    loadChildren: () => import('./evento/validar-frequencia/validar-frequencia.module')
    .then(m => m.ValidarFrequenciaPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'escolher-participante/:codEvento',
    loadChildren: () => import('./escolher-participante/escolher-participante.module')
    .then(m => m.EscolherParticipantePageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'imprimir-inscritos/:codEvento',
    loadChildren: () => import('./imprimir-inscritos/imprimir-inscritos.module')
    .then(m => m.ImprimirInscritosPageModule),
    canActivate: [GuardAuthGuard]
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./login-admin/login-admin.module').then(m => m.LoginAdminPageModule),
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
