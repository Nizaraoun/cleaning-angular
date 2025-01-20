import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { ScrollAnimationDirective } from '../../../style/scroll-animation.directive';

@Component({
  selector: 'app-teams',
  standalone: true,
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  imports: [
    CommonModule,
    ScrollAnimationDirective
  ]
})
export class TeamsComponent implements AfterViewInit {
  teamMembers = [
    {
      name: 'Mackolin Smith',
      role: 'Best Technician of AC Installation and Maintenance',
      image: 'assets/team_1_6.jpg',
      socials: [
        { link: 'https://facebook.com/', iconClass: 'fab fa-facebook-f' },
        { link: 'https://twitter.com/', iconClass: 'fab fa-twitter' },
        { link: 'https://instagram.com/', iconClass: 'fab fa-instagram' },
        { link: 'https://linkedin.com/', iconClass: 'fab fa-linkedin-in' }
      ]
    },
    {
      name: 'Ralph Edwards',
      role: 'Best Technician of Home Service and Maintenance',
      image: 'assets/team_1_6.jpg',
      socials: [
        { link: 'https://facebook.com/', iconClass: 'fab fa-facebook-f' },
        { link: 'https://twitter.com/', iconClass: 'fab fa-twitter' },
        { link: 'https://instagram.com/', iconClass: 'fab fa-instagram' },
        { link: 'https://linkedin.com/', iconClass: 'fab fa-linkedin-in' }
      ]
    },
    {
      name: 'Guy Hawkins',
      role: 'Best Technician of AC Installation and Maintenance',
      image: 'assets/team_1_6.jpg',
      socials: [
        { link: 'https://facebook.com/', iconClass: 'fab fa-facebook-f' },
        { link: 'https://twitter.com/', iconClass: 'fab fa-twitter' },
        { link: 'https://instagram.com/', iconClass: 'fab fa-instagram' },
        { link: 'https://linkedin.com/', iconClass: 'fab fa-linkedin-in' }
      ]
    },
    {
      name: 'Guy Hawkins',
      role: 'Best Technician of AC Installation and Maintenance',
      image: 'assets/team_1_6.jpg',
      socials: [
        { link: 'https://facebook.com/', iconClass: 'fab fa-facebook-f' },
        { link: 'https://twitter.com/', iconClass: 'fab fa-twitter' },
        { link: 'https://instagram.com/', iconClass: 'fab fa-instagram' },
        { link: 'https://linkedin.com/', iconClass: 'fab fa-linkedin-in' }
      ]
    },
    {
      name: 'Guy Hawkins',
      role: 'Best Technician of AC Installation and Maintenance',
      image: 'assets/team_1_6.jpg',
      socials: [
        { link: 'https://facebook.com/', iconClass: 'fab fa-facebook-f' },
        { link: 'https://twitter.com/', iconClass: 'fab fa-twitter' },
        { link: 'https://instagram.com/', iconClass: 'fab fa-instagram' },
        { link: 'https://linkedin.com/', iconClass: 'fab fa-linkedin-in' }
      ]
    }
    // Add more team members here
  ];

  ngAfterViewInit() {
    new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 3 },
      },
    });
  }
}
