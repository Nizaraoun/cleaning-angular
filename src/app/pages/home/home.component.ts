import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { SerivceComponent } from "../serivce/serivce.component";
import { ScrollAnimationDirective } from '../../../style/scroll-animation.directive';
import { AboutComponent } from '../about_doc/about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ScrollAnimationDirective,
    AboutComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides: string[] = [
    'assets/banner/banner-1.jpg',
    // 'assets/banner/banner-2.jpg',
    // 'assets/banner/banner-3.jpg'
  ];

  currentSlide: string = this.slides[0];
  currentIndex: number = 0;

  ngOnInit(): void {
    interval(3000)
      .pipe(
        map(value => value % this.slides.length)
      )
      .subscribe(index => {
        this.currentIndex = index;
        this.currentSlide = this.slides[index];
      });
  }
  
}
