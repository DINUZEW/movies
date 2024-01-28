import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies } from '../shared/movies.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://run.mocky.io/v3/2a3a93fb-4616-4313-a891-349890748754'
  }

  public getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.apiUrl);
  }
}
