import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { MetadataComponent } from './components/metadata/metadata.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CarouselComponent,
    HomepageComponent,
    MetadataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
