import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {} from '@angular/'

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss'],
})
export class GooglemapsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/booking']);
  }
}
