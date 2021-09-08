import { Component, OnInit } from '@angular/core';
import { Superheroes } from 'src/app/models/superheroes.model';
import { SuperheroessService } from 'src/app/services/superheroes.service';

@Component({
  selector: 'app-add-superheroes',
  templateUrl: './add-superheroes.component.html',
  styleUrls: ['./add-superheroes.component.css']
})
export class AddSuperheroesComponent implements OnInit {

  superheroes: Superheroes = {
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
  submitted = false;

  constructor(private superheroesService: SuperheroessService) { }

  ngOnInit(): void {
  }

  saveSuperheroes(): void {
    const data = {
      name: this.superheroes.name,
      short_name: this.superheroes.short_name,
      alt_name: this.superheroes.alt_name,
      role: this.superheroes.role,
      new_role: this.superheroes.new_role,
      type: this.superheroes.type,
      release_date: this.superheroes.release_date,
      rework_date: this.superheroes.rework_date,
      attribute_id: this.superheroes.attribute_id,
      translations: this.superheroes.translations
    };

    this.superheroesService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newSuperheroes(): void {
    this.submitted = false;
    this.superheroes = {
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
  }

}
