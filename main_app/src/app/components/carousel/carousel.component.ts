import { trigger, transition, style, animate } from '@angular/animations';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/shared/movies.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnChanges {
  @Input() allMovies: Movies[];
  public genres: string[] = [];
  public filteredMovies: Movies[];
  public isPortrait: boolean = false;

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.genres = Array.from(
      new Set(this.allMovies.flatMap((movie) => movie.genre))
    );

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes?.['allMovies']) {
      this.allMovies = changes['allMovies'].currentValue;
      this.genres = Array.from(
        new Set(this.allMovies.flatMap((movie) => movie.genre))
      );
      this.filteredMovies = this.allMovies;
    }
  }

  filterCarousel($event): void {
    const filter = $event.value;
    this.filteredMovies = this.allMovies.filter(movie => movie.genre.includes(filter))
  }

  selectMovie($event): void {
    this.service.setSelectMovie(this.allMovies.find(el => el.title == $event.title))
  }

  scrollRight(): void {
    const element = document.getElementById("scrollableElement");

    if (element) {
      element.scrollBy({
        left: 350,
        behavior: 'smooth',
      });
    }
  }

  scrollLeft(): void {
    const element = document.getElementById("scrollableElement");

    if (element) {
      element.scrollBy({
        left: -350,
        behavior: 'smooth',
      });
    }
  }
}
