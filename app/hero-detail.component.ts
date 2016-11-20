import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: [ 'hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      const id = parseInt(params['id'], 10);
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero);
    this.goBack();
  }
}
