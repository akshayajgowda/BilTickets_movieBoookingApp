import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  Booking:any = {};
  movie_time1: any;
  movie_date: any;
  private sub: any;
  constructor(private router:Router, private detailsService:DetailsService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      this.movie_time1 = +params['movie_time']; // (+) converts string 'id' to a number
      console.log(this.movie_time1);
      })
      
    this.detailsService.getRemoteBooking().subscribe((result)=>this.Booking=result);
  }

  goBack() {
    this.router.navigate(['/booking']);
           }

  

}
