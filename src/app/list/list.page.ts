import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  constructor(private router:Router) {

  }

  ngOnInit() {
  }

  slideChanged(slides) {
    slides.startAutoplay();
  }

  goBack() {
    this.router.navigate(['/home']);
           }

}
