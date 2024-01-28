import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movies } from 'src/app/shared/movies.model';

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.scss']
})
export class MetadataComponent implements OnChanges {
  @Input() selectedMovie: Movies;

  constructor() { };



  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes?.['selectedMovie'] && changes?.['selectedMovie'].currentValue !== changes?.['selectedMovie'].previousValue) {
      this.selectedMovie = changes['selectedMovie'].currentValue;
    }
  }
}
