import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _httpClient: HttpClient) {}

  getTrending(mediaType: string): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=13b2509f7926b332023adf48e6f658a7`
    );
  }
  getMovieDetails(id: string): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=13b2509f7926b332023adf48e6f658a7&language=en-US`
    );
  }
  getTvDetails(id: string): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=13b2509f7926b332023adf48e6f658a7&language=en-US`
    );
  }
}
