import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header-widget',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header-widget.component.html',
  styleUrls: ['../../../assets/css/clanora.css','../../../assets/css/libraries.css']
})
export class HeaderWidgetComponent {

    packages = [
      {
        id: 'package1',
        title: 'Résidentiel',
        description: 'Nous fournissons des services de nettoyage résidentiel qui vous aideront à protéger vos clients et employés. Nous nous soucions de la propreté et cela se voit dans notre travail, notre personnel, et notre engagement à respecter notre parole chaque jour.',
        imageUrl: 'assets/images/pricing/banners/1.jpg',
        facilities: [
          'Installations de fabrication',
          'Bâtiments gouvernementaux',
          'Établissements éducatifs',
          'Institutions financières',
          'Établissements médicaux',
          'Bâtiments religieux'
        ]
      },
      {
        id: 'package2',
        title: 'Commercial',
        description: 'Nous fournissons des services de nettoyage commercial qui vous aideront à protéger vos clients et employés. Nous nous soucions de la propreté et cela se voit dans notre travail, notre personnel, et notre engagement à respecter notre parole chaque jour.',
        imageUrl: 'assets/images/pricing/banners/2.jpg',
        facilities: [
          'Bureaux d\'entreprise',
          'Centres commerciaux',
          'Bâtiments gouvernementaux',
          'Hôtels et restaurants',
          'Institutions financières',
          'Établissements médicaux'
        ]
      },
      {
        id: 'package3',
        title: 'Extérieur',
        description: 'Nous fournissons des services de nettoyage extérieur qui vous aideront à protéger vos clients et employés. Nous nous soucions de la propreté et cela se voit dans notre travail, notre personnel, et notre engagement à respecter notre parole chaque jour.',
        imageUrl: 'assets/images/pricing/banners/3.jpg',
        facilities: [
          'Jardins publics',
          'Parcs',
          'Terrains de sport',
          'Zones résidentielles',
          'Aires de jeux',
          'Espaces de stationnement'
        ]
      }
    ];
  }