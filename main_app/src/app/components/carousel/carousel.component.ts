import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/shared/movies.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() allMovies: Movies[];


  constructor(){};

  ngOnInit(): void {
    
  }

}
