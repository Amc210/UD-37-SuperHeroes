import { Component, OnInit } from '@angular/core';
import { Superheroes } from 'src/app/models/superheroes.model';
import { SuperheroessService } from 'src/app/services/superheroes.service';

@Component({
  selector: 'app-superheroes-list',
  templateUrl: './superheroes-list.component.html',
  styleUrls: ['./superheroes-list.component.css']
})
export class SuperheroesListComponent implements OnInit {

  superheroes?: Superheroes[];
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
  currentIndex = -1;
  name = '';

  constructor(private SuperheroesService: SuperheroessService) { }

  ngOnInit(): void {
    this.retrieveSuperheroes();
  }

  retrieveSuperheroes(): void {
    this.SuperheroesService.getAll()
      .subscribe(
        (        data: Superheroes[] | undefined) => {
          this.superheroes = data;
          console.log(data);
        },
        (        error: any) => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveSuperheroes();
    this.currentSuperheroes = {
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
    this.currentIndex = -1;
  }

  setActiveSuperheroes(superheroes: Superheroes, index: number): void {
    this.currentSuperheroes = superheroes;
    this.currentIndex = index;
  }

  removeAllSuperheroes(): void {
    this.SuperheroesService.deleteAll()
      .subscribe(
        (        response: any) => {
          console.log(response);
          this.refreshList();
        },
        (        error: any) => {
          console.log(error);
        });
  }

  searchName(): void {
    this.currentSuperheroes = {
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
    this.currentIndex = -1;

    this.SuperheroesService.findByName(this.name)
      .subscribe(
        (        data: any) => {
          this.superheroes = data;
          console.log(data);
        },
        (        error: any) => {
          console.log(error);
        });
  }



}
