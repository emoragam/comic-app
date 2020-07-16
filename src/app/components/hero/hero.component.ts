import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Hero, HeroesService} from "../../services/heroes.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Hero;
  constructor( private activatedRoute: ActivatedRoute,
               private service: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.hero = service.getHero( params['id'] );
    })
  }

  ngOnInit(): void {
  }

}
