// src/app/components/service-details/service-details.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product'; // Adjust the path if needed
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { HowWorkWidgetComponent } from "../../shared/how-work-widget/how-work-widget.component";
import { LikeUsComponent } from "../../shared/like-us/like-us.component";
import { HeaderWidgetComponent } from "../../shared/header-widget/header-widget.component";
import { WhyUsComponent } from "../../shared/why-us/why-us.component";
import { MesServiceService } from '../../service/services/mes-service.service';

@Component({
  selector: 'app-service-details',
  standalone: true,
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css', '../../../assets/css/clanora.css', '../../../assets/css/libraries.css'],
  imports: [CommonModule, CarouselModule, ButtonModule, TagModule, HowWorkWidgetComponent, LikeUsComponent, HeaderWidgetComponent, WhyUsComponent],
  providers: []
})

export class ServiceDetailsComponent implements OnInit {

  services = [
    {
      title: 'Nettoyage de bureaux',
      subtitle: 'Nettoyage de bureaux',
      description: `Le nettoyage de bureaux est une tâche qui doit être effectuée régulièrement pour garantir un environnement de travail propre et sain. Les bureaux sont des lieux de travail où les employés passent la majeure partie de leur temps, il est donc important de les maintenir propres et bien entretenus. Le nettoyage de bureaux comprend le dépoussiérage, le balayage, le lavage des sols, le nettoyage des vitres, le vidage des poubelles, etc. Il est essentiel de confier cette tâche à des professionnels pour garantir un résultat impeccable.`,
      image: 'assets/work3.png'
    }
  ];

  processes = [
    {
      number: '01',
      title: 'Fournissez-nous les détails',
      description: 'Il suffit de nous indiquer le moment où vous souhaitez que nous intervenions et nous établirons notre planning.',
      icon: 'fas fa-broom'
    },
    {
      number: '02',
      title: 'Choisissez le plan qui vous convient',
      description: 'Nous venons chez vous pour inspecter la zone afin de la préparer à la désinfection et de prendre en compte vos besoins.',
      icon: 'fas fa-spray-can'
    },
    {
      number: '03',
      title: 'Planification en ligne en quelques clics',
      description: 'Nous réalisons la désinfection en quelques heures en fonction de la taille de la maison et du volume.',
      icon: 'fas fa-faucet'
    },
    {
      number: '04',
      title: 'Nettoyage avec soin et départ rapide',
      description: 'Nous réalisons la désinfection en quelques heures en fonction de la taille de la maison et du volume.',
      icon: 'fas fa-vacuum'
    }
  ];

  products: Product[] = []; // Initialize as an empty array
  responsiveOptions: any[] | undefined;

  constructor(
    // private servicesService: MesServiceService
  ) {}
  ngOnInit() {
    // this.fetchServices();
    

}
// Myservices: any[] = []; // To store fetched services



// async fetchServices() {
//   try {
//     this.Myservices = await this.servicesService.getAllServices();
//     console.log('Services:', this.Myservices); // Check the fetched data in console
//   } catch (error) {
//     console.error('Error fetching services:', error);
//   }
// }

}
