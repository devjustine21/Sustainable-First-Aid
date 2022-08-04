import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule)
  },
  {
    path: 'first-aid',
    loadChildren: () => import('./pages/first-aid/first-aid.module').then( (m) => m.FirstAidPageModule)
  },
  {
    path: 'first-aid-basics',
    loadChildren: () => import('./pages/first-aid-basics/first-aid-basics.module').then( m => m.FirstAidBasicsPageModule)
  },
  {
    path: 'cpr',
    loadChildren: () => import('./pages/cpr/cpr.module').then( m => m.CPRPageModule)
  },
  {
    path: 'common-incidents',
    loadChildren: () => import('./pages/common-incidents/common-incidents.module').then( m => m.CommonIncidentsPageModule)
  },
  {
    path: 'environmental-incidents',
    loadChildren: () => import('./pages/environmental-incidents/environmental-incidents.module').then( m => m.EnvironmentalIncidentsPageModule)
  },
  {
    path: 'serious-incidents',
    loadChildren: () => import('./pages/serious-incidents/serious-incidents.module').then( m => m.SeriousIncidentsPageModule)
  },
  {
    path: 'preventive-measures',
    loadChildren: () => import('./pages/preventive-measures/preventive-measures.module').then( m => m.PreventiveMeasuresPageModule)
  },
  {
    path: 'emergency-services',
    loadChildren: () => import('./pages/emergency-services/emergency-services.module').then( m => m.EmergencyServicesPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'emcontact',
    loadChildren: () => import('./pages/emcontact/emcontact.module').then( m => m.EmcontactPageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'volunteers',
    loadChildren: () => import('./pages/volunteers/volunteers.module').then( m => m.VolunteersPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'vmodal',
    loadChildren: () => import('./vmodal/vmodal.module').then( m => m.VmodalPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
