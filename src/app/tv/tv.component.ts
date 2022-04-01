import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  imgPrefix: string = 'https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService: MoviesService) {}
  terndingTv: any[] = [];

  ngOnInit(): void {
    this._MoviesService.getTrending('tv').subscribe((response) => {
      this.terndingTv = response.results;
    });
  }

}
