import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-how-work-widget',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './how-work-widget.component.html',
  styleUrls: ['../../../assets/css/clanora.css', '../../../assets/css/libraries.css'],
})
export class HowWorkWidgetComponent {
  subtitle: string = 'Découvrez comment cela fonctionne !';
  title: string = 'Étapes simples pour un environnement propre et sain';

  processItems = [
    {
      title: 'Fournissez-nous les détails',
      description: 'Indiquez-nous simplement l\'horaire souhaité et nous ajusterons notre planning selon vos besoins.',
      iconClass: 'icon-mop'
    },
    {
      title: 'Choisissez le plan qui vous convient',
      description: 'Nous venons chez vous pour inspecter la zone à préparer pour la désinfection, et pour en prendre soin.',
      iconClass: 'icon-sponge'
    },
    {
      title: 'Planification en ligne en quelques clics',
      description: 'Nous effectuons la désinfection en quelques heures, en fonction de la taille de la maison et de la quantité.',
      iconClass: 'icon-tap'
    },
    {
      title: 'Nettoyage avec soin & départ rapide',
      description: 'Nous effectuons la désinfection en quelques heures, en fonction de la taille de la maison et de la quantité.',
      iconClass: 'icon-vacuum-cleaner'
    }
  ];

  teamText: string = 'Équipe dédiée de spécialistes formés.';
  buttonText: string = 'Rencontrez nos experts';
}
