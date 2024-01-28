import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movies } from 'src/app/shared/movies.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnChanges {
  @Input() selectedMovie: Movies;
  
  constructor() {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes?.['selectedMovie'] && changes?.['selectedMovie'].currentValue !== changes?.['selectedMovie'].previousValue) {
      this.selectedMovie = changes['selectedMovie'].currentValue;
    }
  }
}
