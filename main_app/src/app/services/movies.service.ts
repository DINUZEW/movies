import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies } from '../shared/movies.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl: string;
  public selectMovieSubject: BehaviorSubject<Movies> = new BehaviorSubject<Movies>(undefined);
  public isPortrait: boolean;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://run.mocky.io/v3/151068e7-7571-423b-bd78-72c69c9a4ae4';
    this.isPortrait = window.innerWidth < 992;
  }

  public getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.apiUrl);
  }

  public setSelectMovie(movie: Movies): void {
    this.selectMovieSubject.next(movie);
  }

}
