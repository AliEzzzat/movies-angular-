import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService: MoviesService) {}
  terndingMovies: any[] = [];

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((response) => {
      this.terndingMovies = response.results;
    });
  }

}
