import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//Routes
import { APP_ROUTING } from './app.routes';

//Services
import { HeroesService } from './services/heroes.service';
import { HeroComponent } from './components/hero/hero.component';
import { SearcherHeroComponent } from './components/searcher-hero/searcher-hero.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    SearcherHeroComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
