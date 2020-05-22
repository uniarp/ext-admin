import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'evento-pesquisa', pathMatch: 'full' },

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) 
  },
  {
    path: 'palestrante-cadastro',
    loadChildren: () => import('./palestrante/palestrante-cadastro/palestrante-cadastro.module').then(m => m.PalestranteCadastroPageModule)
  },
  {
    path: 'palestrante-pesquisa',
    loadChildren: () => import('./palestrante/palestrante-pesquisa/palestrante-pesquisa.module')
      .then(m => m.PalestrantePesquisaPageModule)
  },
  {
    path: 'voluntario-cadastro',
    loadChildren: () => import('./voluntario/voluntario-cadastro/voluntario-cadastro.module')
      .then(m => m.VoluntarioCadastroPageModule)
  },
  {
    path: 'voluntario-cadastro/:id',
    loadChildren: () => import('./voluntario/voluntario-cadastro/voluntario-cadastro.module')
      .then(m => m.VoluntarioCadastroPageModule)
  },
  {
    path: 'voluntario-pesquisa',
    loadChildren: () => import('./voluntario/voluntario-pesquisa/voluntario-pesquisa.module')
      .then(m => m.VoluntarioPesquisaPageModule)
  },
  {
    path: 'usuario-cadastro',
    loadChildren: () => import('./usuario/usuario-cadastro/usuario-cadastro.module').then(m => m.UsuarioCadastroPageModule)
  },
  {
    path: 'usuario-pesquisa',
    loadChildren: () => import('./usuario/usuario-pesquisa/usuario-pesquisa.module').then(m => m.UsuarioPesquisaPageModule)
  },
  {
    path: 'voluntario-pesquisa',
    loadChildren: () => import('./voluntario/voluntario-pesquisa/voluntario-pesquisa.module')
      .then(m => m.VoluntarioPesquisaPageModule)
  },
  {
    path: 'participante-cadastro',
    loadChildren: () => import('./participante/participante-cadastro/participante-cadastro.module').then(m => m.ParticipanteCadastroPageModule)
  },
  {
    path: 'participante-cadastro/:id',
    loadChildren: () => import('./participante/participante-cadastro/participante-cadastro.module').then(m => m.ParticipanteCadastroPageModule)
  },
  {
    path: 'participante-pesquisa',
    loadChildren: () => import('./participante/participante-pesquisa/participante-pesquisa.module').then(m => m.ParticipantePesquisaPageModule)
  },
  {
    path: 'evento-cadastro',
    loadChildren: () => import('./evento/evento-cadastro/evento-cadastro.module').then(m => m.EventoCadastroPageModule)
  },
  {
    path: 'atividade-cadastro',
    loadChildren: () => import('./atividade/atividade-cadastro/atividade-cadastro.module').then(m => m.AtividadeCadastroPageModule)
  },
  {
    path: 'evento-pesquisa',
    loadChildren: () => import('./evento/evento-pesquisa/evento.module').then(m => m.EventoPageModule)
  },
  {
    path: 'inscricao-participante/:codParticipante/:codEvento',
    loadChildren: () => import('./inscricao-participante/inscricao-participante.module').then(m => m.inscricaoParticipantePageModule)
  },
  {
    path: 'evento-cancelar',
    loadChildren: () => import('./evento/evento-cancelar/evento-cancelar.module').then(m => m.EventoCancelarPageModule)
  },
  {
    path: 'lista-inscritos',
    loadChildren: () => import('./evento/lista-inscritos/lista-inscritos.module').then(m => m.ListaInscritosPageModule)
  },
  {
    path: 'atividade-pesquisa',
    loadChildren: () => import('./atividade/atividade-pesquisa/atividade-pesquisa.module').then(m => m.AtividadePesquisaPageModule)
  },
  {
    path: 'validar-frequencia',
    loadChildren: () => import('./evento/validar-frequencia/validar-frequencia.module').then(m => m.ValidarFrequenciaPageModule)
  },
  {
    path: 'escolher-participante/:codEvento',
    loadChildren: () => import('./escolher-participante/escolher-participante.module').then(m => m.EscolherParticipantePageModule)
  },
  {
    path: 'imprimir-inscritos/:codEvento',
    loadChildren: () => import('./imprimir-inscritos/imprimir-inscritos.module').then( m => m.ImprimirInscritosPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
