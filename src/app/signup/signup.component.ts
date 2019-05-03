import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  
  customers=[];
  customer = {name:'', address:'', email:'', phone:'', password:''};

  constructor(private router:Router, private customerService:CustomerService) { }

  onSignUp(customer) {
   
      this.customerService.addRemoteCustomer(customer).subscribe(()=>{this.router.navigate(['/login']);});
  
    }
   


  goBack() {
    this.router.navigate(['/login']);
  }
  

  ngOnInit() {

  }

}
