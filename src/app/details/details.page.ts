import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  num_tickets = '';
  //movies= [];
  //movie={id:0, name:'', year:'', image_url:'', production_house:'', rating:'', type:'', language:'',date:''};

  constructor(private detailsService:DetailsService, private moviesService:MoviesService, private route: ActivatedRoute, private router: Router) { }
  id: number;
  private sub: any;
  movie:any={};

  ngOnInit() {this.moviesService.getRemoteMovies().subscribe((result)=>this.movie=result);
  
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log("id is "+this.id);
      this.moviesService.getRemoteMoviesById(this.id).subscribe((movie)=> {this.movie=movie;})

  });

  
  }

  onBook(movie) {
    this.router.navigate(['/booking/'+movie.id]);
  }

}
