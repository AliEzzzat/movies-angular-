import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
updateUrl($event: ErrorEvent) {
throw new Error('Method not implemented.');
}
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService: MoviesService) {}
  terndingMovies: any[] = [];
  terndingTv: any[] = [];
  terndingPeople: any[] = [];

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((response) => {
      this.terndingMovies = response.results.slice(0, 10);
    });
    this._MoviesService.getTrending('tv').subscribe((response) => {
      this.terndingTv = response.results.slice(0, 10);
    });
    this._MoviesService.getTrending('person').subscribe((response) => {
      this.terndingPeople = response.results.slice(0, 10);
    });
  }
}
