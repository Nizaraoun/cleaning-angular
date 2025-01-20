import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './why-us.component.html',
  styleUrls: ['../../../assets/css/clanora.css', '../../../assets/css/libraries.css'],
})
export class WhyUsComponent {
  features = [
    {
      id: 1,
      title: 'Équipes en bonne santé et distanciation sociale',
      description: 'Nos experts sont soigneusement formés et utilisent des systèmes de nettoyage et de désinfection propriétaires.',
      imageUrl: 'assets/images/features/1.jpg',
      icon: 'icon-hand-dryer',
      link: 'service-details',
      linkText: 'En savoir plus'
    },
    {
      id: 2,
      title: 'Désinfectant de qualité professionnelle',
      description: 'Réduisez le temps de nettoyage d\'environ 25 % tout en garantissant un environnement impeccable et désinfecté.',
      imageUrl: 'assets/images/features/2.jpg',
      icon: 'icon-bucket',
      link: 'service-details',
      linkText: 'En savoir plus'
    },
    {
      id: 3,
      title: 'Outils de nettoyage stérilisés et désinfectés',
      description: 'Nous nous familiariserons avec votre établissement, puis créerons un plan de nettoyage personnalisé.',
      imageUrl: 'assets/images/features/3.jpg',
      icon: 'icon-wet-floor',
      link: 'service-details',
      linkText: 'En savoir plus'
    },
    {
      id: 4,
      title: 'Garantie de satisfaction à 100 %',
      description: 'Nous offrons une grande variété de services pouvant être personnalisés selon vos besoins.',
      imageUrl: 'assets/images/features/4.jpg',
      icon: 'icon-dusting',
      link: 'service-details',
      linkText: 'En savoir plus'
    }
  ];

  headingSubtitle = 'Voyez pourquoi les propriétaires nous aiment !';
  headingTitle = 'Le nom le plus fiable dans le secteur du nettoyage';
  contactText = 'Pour un nettoyage qui répond à vos normes les plus élevées, vous avez besoin d\'une équipe dédiée de spécialistes formés. Nous arrivons à chaque visite avec tous les produits nécessaires pour nettoyer minutieusement votre maison grâce à notre processus de nettoyage complet.';

}
