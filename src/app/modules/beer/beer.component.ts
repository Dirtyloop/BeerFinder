import { Component, OnInit } from '@angular/core';
import { BeerService } from './beer.service';
import { Beer } from './model/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {

  beers: Beer[] = [];

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
    this.getRandomBeer();
  }

  private getRandomBeer() {
    this.beerService.getRandomBeer().subscribe(beers => this.beers = beers);
  }

}
