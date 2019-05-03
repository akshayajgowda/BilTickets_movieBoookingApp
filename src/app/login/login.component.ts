import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CustomerService } from '../customer.service';
import { Storage } from '@ionic/storage';
//plugin Geolocation
import { Geolocation } from '@ionic-native/geolocation/ngx';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  customer ={ name:'', password:'', address:'', email:'', phone:''};
customers= [];
  constructor(private router:Router, private storage: Storage, private customerService:CustomerService, public actionSheetController: AlertController,private geolocation:Geolocation) {

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Send me mail',
      inputs: [{
        name: 'email',
        placeholder: 'Enter your email',
      }],
      buttons: [{
        text: 'Submit email',
        role: 'destructive'    
      },
      {
        text: 'Cancel',
        role: 'cancel',
       
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {this.customerService.getRemoteCustomers().subscribe((result)=>this.customers=result);};




  // For login page
onLogin(customer) {
  console.log(customer.name);
  console.log(customer.password);
  for(var i=0;i<this.customers.length;i++){
  if((this.customers[i].name===customer.name) && (this.customers[i].password===customer.password)) {
    localStorage.setItem('customerdata',JSON.stringify(this.customers[i]));
    
    this.getLocation();
  this.router.navigate(['/home']);
    }
   
  }
}

getLocation(){
  this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    console.log(resp.coords.latitude);
    console.log(resp.coords.longitude);
   }).catch((error) => {
     console.log('Error getting location', error);
   });
   
   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
   });
}

// onLogin(customer) {
//   console.log(customer.name);
//   console.log(customer.password);
//   for(var i=0;i<this.customers.length;i++){
//   if((this.customers[i].name===customer.name) && (this.customers[i].password===customer.password)) {
//   this.router.navigate(['/home']);
//   if (localStorage.getItem('customerdata')==null)
//   {
//     localStorage.setItem('customerdata',JSON.stringify(this.customers[i].id));
//   }
// break;
//     }
//     else {
//       this.invalidUser();
//     }
//   }
// }




// async invalidUser() {
//   const alert = await this.actionSheetController.create({
//     subHeader: 'Forget Password',
    
//     buttons: ['cancel'
//     ]
//   });
//   await alert.present();
// }

onRegister() {
  this.router.navigate(['/signup']);
}

goBack() {
  this.router.navigate(['/home']);
}

  

}
