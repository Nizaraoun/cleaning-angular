import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AppRoutingModule } from '../../app.routes';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    CommonModule  ,
    RouterLink,


  ] // Import the standalone directive
})
export class NavbarComponent {
navigateToservice() {
  this.router.navigate(['/service-details']);
}
  constructor(private router: Router) {}
  navigateToContact() {
    this.router.navigate(['/contactform']);

  }

  navigateTohome() {
    this.router.navigate(['/home']);

  }
  navigateToAbout() {
    this.router.navigate(['/about-us']);

  }


  isMobileOrTablet: boolean = false;


  // Lifecycle hook to check the screen size when the component is initialized
  ngOnInit(): void {
    this.checkScreenSize();
  }

  // Listen to window resize event
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  // Check the screen size and set the boolean flag
  checkScreenSize(): void {
    if (typeof window !== 'undefined') { // Make sure the window object is available
      const width = window.innerWidth;
      this.isMobileOrTablet = width <= 600; // Adjust the width threshold as needed
    }
  }


  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

 }
