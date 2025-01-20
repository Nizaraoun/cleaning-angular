import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TeamsComponent } from "../teams/teams.component";
import { ScrollAnimationDirective } from '../../../style/scroll-animation.directive';
import { ContactComponent } from '../contact_pages/contact/contact.component';
import { MesServiceService } from '../../service/services/mes-service.service';

@Component({
  selector: 'app-serivce',
  standalone: true,
  imports: [
    CommonModule,
    TeamsComponent,
    ScrollAnimationDirective,
    ContactComponent
],
  templateUrl: './serivce.component.html',
  styleUrl: './serivce.component.css'
})
export class SerivceComponent {
  services = [
    {
      icon: 'assets/douche.png',
      title: 'Ménage',
      description: 'Expert installation of high-speed fiber optic cables for reliable connectivity for your home or business.',
      link: '/services/fiberlink-installation'
    },
    {
      icon: 'assets/bricolage.png',
      title: 'Bricolage',
      description: 'Fast and reliable repair services for damaged fiber optic cables to restore your internet connection.',
      link: '/services/fiberlink-repair'
    },
    {
      icon: 'assets/gestion.png',
      title: 'Gestion locative court durée',
      description: 'Regular maintenance services to ensure the optimal performance of your fiber optic cables.',
      link: '/services/fiberlink-maintenance'
    },
    {
      icon: 'assets/batiment.png',
      title: 'Entreprises',
      description: 'Upgrade your existing fiber optic cables to the latest technology for faster and more reliable internet.',
      link: '/services/fiberlink-upgrade'
    },
   


  ]

  constructor(
    private servicesService: MesServiceService
  ) {}
  ngOnInit() {
    this.fetchServices();
    

}
Myservices: any[] = []; // To store fetched services



async fetchServices() {
  try {
    this.Myservices = await this.servicesService.getAllServices();
    console.log('Services:', this.Myservices); // Check the fetched data in console
  } catch (error) {
    console.error('Error fetching services:', error);
  }
}

}
