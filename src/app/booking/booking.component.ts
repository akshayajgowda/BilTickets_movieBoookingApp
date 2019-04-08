import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  tickets_need:any = '';
  movie_date:any = '';
  movie_time:any = '';
  // bookinfo={tickets_need:'', movie_id:'', movie_date:'', amount:'', movie_time:''};
  booking:any = {};
  customer_Data:any = {};
  customer_ID:any;
  constructor(private moviesService:MoviesService, private detailsService:DetailsService, private route: ActivatedRoute, private router: Router) { }
  id: number;
  private sub: any;
  movie:any={};

  

  ngOnInit() {
    this.customer_Data = JSON.parse(localStorage.getItem('customerdata'));
    this.customer_ID = this.customer_Data.id;
    this.moviesService.getRemoteMovies().subscribe((result)=>this.movie=result);
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log("id is "+this.id);
      this.moviesService.getRemoteMoviesById(this.id).subscribe((movie)=> {this.movie=movie;
      })
       
  });
  }

  

  onBooking() {
    console.log(this.movie.id);
    console.log(this.tickets_need);
    console.log(this.movie_time);
    console.log(this.movie_date);
    var amountperticket: any = ((this.tickets_need)*(100));
    console.log(amountperticket);
    console.log(this.customer_ID);
    this.booking= {customer_id:this.customer_ID ,tickets_need:this.tickets_need, movie_id:this.movie.id, movie_date:this.movie_date, amount:amountperticket ,movie_time:this.movie_time};
    // this.detailsService.addRemoteBooking(this.booking).subscribe(()=>{this.router.navigate(['/payment/'+this.booking.id]);});
    this.detailsService.addRemoteBooking(this.booking).subscribe(()=>{ console.log(this.booking); });
  }
  

  

}
