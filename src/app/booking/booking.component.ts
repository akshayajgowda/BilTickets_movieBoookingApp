
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';

declare var RazorpayCheckout:any;


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
  // constructor(private router: Router){}
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

  google_maps() {
    this.router.navigate(['/googlemaps']);
  }

  

  // onBooking() {
  //   console.log(this.movie.id);
  //   console.log(this.tickets_need);
  //   console.log(this.movie_time);
  //   console.log(this.movie_date);
  //   var amountperticket: any = ((this.tickets_need)*(100));
  //   console.log(amountperticket);
  //   console.log(this.customer_ID);
  //   this.booking= {customer_id:this.customer_ID ,tickets_need:this.tickets_need, movie_id:this.movie.id, movie_date:this.movie_date, amount:amountperticket ,movie_time:this.movie_time};
  //   // this.detailsService.addRemoteBooking(this.booking).subscribe(()=>{this.router.navigate(['/payment/'+this.booking.id]);});
  //   this.detailsService.addRemoteBooking(this.booking).subscribe(()=>{ this.router.navigate(this.booking); });
  // }

  onBooking() {
    var amountperticket: any = ((this.tickets_need)*(100));
    this.booking= {customer_id:this.customer_ID ,tickets_need:this.tickets_need, movie_id:this.movie.id, movie_date:this.movie_date, amount:amountperticket ,movie_time:this.movie_time};
    this.detailsService.addRemoteBooking(this.booking).subscribe(()=>{ console.log(this.booking)});
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_gEEko61scsbxmP', 
      // order_id: 'order_7HtFNLS98dSj8x',
      amount: ((this.tickets_need)*(10000)),
      name: this.customer_Data.name,
      prefill: {
        email: this.customer_Data.email,
        contact: this.customer_Data.phone,
        name: this.customer_Data.name
      },
      theme: {
        color: '#F37254'
      }
    }
    
    var successCallback = function(success) {
      alert('payment_id: ' + success.razorpay_payment_id)
      var orderId = success.razorpay_order_id
      var signature = success.razorpay_signature
    }
    
    var cancelCallback = function(error) {
      alert(error.description + ' (Error '+error.code+')')
    }
    
    RazorpayCheckout.on('payment.success', successCallback)
    RazorpayCheckout.on('payment.cancel', cancelCallback)
    RazorpayCheckout.open(options)
  }
  

  

}
