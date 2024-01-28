import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/shared/movies.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnChanges, OnDestroy {
  @Input() selectedMovie: Movies;
  subscription: Subscription = new Subscription();
  isPortrait: boolean = false;

  constructor(private service: MoviesService) {
    this.isPortrait = service.isPortrait;
  }

  ngOnInit(): void {
    this.subscription.add(this.service.selectMovieSubject.subscribe((data: Movies) => {
      this.selectedMovie = data;
    }))
      ;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes?.['selectedMovie'] && changes?.['selectedMovie'].currentValue !== changes?.['selectedMovie'].previousValue) {
      this.selectedMovie = changes['selectedMovie'].currentValue;
    }
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
