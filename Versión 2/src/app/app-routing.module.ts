import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddSuperheroesComponent } from './components/add-superheroes/add-superheroes.component';
import { SuperheroesDetailsComponent } from './components/superheroes-details/superheroes-details.component';
import { SuperheroesListComponent } from './components/superheroes-list/superheroes-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'superheroes', pathMatch: 'full' },
  { path: 'superheroes', component: SuperheroesListComponent },
  { path: 'superheroes/:id', component: SuperheroesDetailsComponent },
  { path: 'add', component: AddSuperheroesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
