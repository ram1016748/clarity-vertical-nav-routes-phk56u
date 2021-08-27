import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { BeatlesComponent } from './beatles/beatles.component';
import { AbbeyRoadComponent } from './abbey-road/abbey-road.component';
import { RevolverComponent } from './revolver/revolver.component';

import { ROUTING } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ClarityModule, FormsModule, RouterModule, ROUTING],
  declarations: [AppComponent, BeatlesComponent, AbbeyRoadComponent, RevolverComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
