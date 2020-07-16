import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../services/heroes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero:Hero;
  constructor( private router: Router ) { }

  ngOnInit(): void {
  }
  showHero(){
    this.router.navigate(['/hero',this.hero.id]);
  }
}
