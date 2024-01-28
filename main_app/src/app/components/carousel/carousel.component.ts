import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/shared/movies.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() allMovies: Movies[];
  public genres: string[];


  constructor() {
  };

  ngOnInit(): void {
    this.genres = [...new Set(this.allMovies.flatMap(movie => movie.genre))];
    console.log(this.genres);
  }

}
