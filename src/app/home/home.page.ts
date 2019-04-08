import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//movie={id:0, name:'', year:'', image_url:'', production_house:'', rating:'', type:'', language:''};
movies= [];

constructor(private movieService:MoviesService, private router:Router){}

ngOnInit() {this.movieService.getRemoteMovies().subscribe((result)=>this.movies=result);}

slideChanged(slides) {
  slides.startAutoplay();
}

onBook(movie) {
    this.router.navigate(['/details/'+ movie.id]);
}

}
