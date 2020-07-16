import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Hero, HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-searcher-hero',
  templateUrl: './searcher-hero.component.html',
  styleUrls: ['./searcher-hero.component.css']
})
export class SearcherHeroComponent implements OnInit {

  heroes: Hero[];
  input: string;
  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private service: HeroesService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this.service.searchHeroes( params['input'] );
      this.input = params['input'];
    })
  }

  showHero( idx: number ){
    this.router.navigate(['/hero',idx]);
  }

}
