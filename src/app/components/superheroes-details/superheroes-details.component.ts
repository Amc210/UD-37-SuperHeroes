import { Component, OnInit } from '@angular/core';
import { Superheroes } from 'src/app/models/superheroes.model';
import { SuperheroessService } from 'src/app/services/superheroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-superheroes-details',
  templateUrl: './superheroes-details.component.html',
  styleUrls: ['./superheroes-details.component.css']
})
export class SuperheroesDetailsComponent implements OnInit {

  currentSuperheroes: Superheroes = {
    name: '',
    short_name: '',
    alt_name: ' ',
    role: ' ',
    new_role: ' ',
    type: ' ',
    release_date: ' ',
    attribute_id: ' ',
    translations: [' '],
    findByName: undefined,
    deleteAll: undefined
  };
  message = '';
  superheroes: any;

  constructor(
    private superheroesService: SuperheroessService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getSuperheroes(this.route.snapshot.params.id);
  }

  getSuperheroes(id: string): void {
    this.superheroesService.get(id)
      .subscribe(
        (data) => {
          this.currentSuperheroes = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        });
  }

  updateSuperheroes(): void {
    this.message = '';

    this.superheroesService.update(this.currentSuperheroes.id, this.currentSuperheroes)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteSuperheroes(): void {
    this.superheroesService.delete(this.currentSuperheroes.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/superheroes']);
        },
        error => {
          console.log(error);
        });
  }

}
