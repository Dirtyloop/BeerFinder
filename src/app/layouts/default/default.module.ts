import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { BeerComponent } from 'src/app/modules/beer/beer.component';



@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    BeerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DefaultModule { }
