import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Movies } from 'src/app/shared/movies.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],

})
export class CarouselComponent implements OnInit, OnChanges {
  @Input() allMovies: Movies[];
  public genres: string[];
  currentIndex = 0;

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.allMovies.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.allMovies.length) % this.allMovies.length;
  }

  getCurrentImage(): string {
    return this.allMovies[this.currentIndex]?.poster;
  }
  constructor() {
  };

  ngOnInit(): void {
    this.genres = [...new Set(this.allMovies.flatMap(movie => movie.genre))];
    console.log(this.genres);
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes?.['allMovies'] && changes?.['allMovies'].currentValue !== changes?.['allMovies'].previousValue) {
      this.allMovies = changes['allMovies'].currentValue;
    }
  }
}
