import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddSuperheroesComponent } from './components/add-superheroes/add-superheroes.component';
import { SuperheroesDetailsComponent } from './components/superheroes-details/superheroes-details.component';
import { SuperheroesListComponent } from './components/superheroes-list/superheroes-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'superheroes', pathMatch: 'full' },
  { path: 'superheroes', component: SuperheroesListComponent },
  { path: 'superheroes/:id', component: SuperheroesDetailsComponent },
  { path: 'add', component: AddSuperheroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
