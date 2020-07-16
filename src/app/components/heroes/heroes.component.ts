import { Component, OnInit } from '@angular/core';
import {Hero, HeroesService} from "../../services/heroes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor( private service: HeroesService,
               private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.service.getHeroes();
  }

}
