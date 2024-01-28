import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/shared/movies.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public allMovies: Movies[];
  public selectedMovie: Movies;
  public screenWidth: number;
  public screenHeight: number;

  constructor(private moviesService: MoviesService) {
    this.allMovies = [];
    this.moviesService.getMovies().subscribe((response) => {
      this.allMovies = response;
      this.selectedMovie = this.allMovies[0];
    },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;  
    this.screenHeight = window.innerHeight;
  }
}
