import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
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
    path: 'voluntario-pesquisa',
    loadChildren: () => import('./voluntario/voluntario-pesquisa/voluntario-pesquisa.module')
      .then(m => m.VoluntarioPesquisaPageModule)
  },
  {
    path: 'usuario-cadastro',
    loadChildren: () => import('./usuario/usuario-cadastro/usuario-cadastro.module').then( m => m.UsuarioCadastroPageModule)
  },
  {
    path: 'usuario-pesquisa',
    loadChildren: () => import('./usuario/usuario-pesquisa/usuario-pesquisa.module').then( m => m.UsuarioPesquisaPageModule)
  },
  {
    path: 'voluntario-pesquisa',
    loadChildren: () => import('./voluntario/voluntario-pesquisa/voluntario-pesquisa.module')
      .then(m => m.VoluntarioPesquisaPageModule)
  },
  {
    path: 'participante-cadastro',
    loadChildren: () => import('./participante/participante-cadastro/participante-cadastro.module').then( m => m.ParticipanteCadastroPageModule)
  },
  {
    path: 'participante-pesquisa',
    loadChildren: () => import('./participante/participante-pesquisa/participante-pesquisa.module').then( m => m.ParticipantePesquisaPageModule)
  },
  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
