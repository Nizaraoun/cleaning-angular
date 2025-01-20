import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../../../style/scroll-animation.directive';
import { SerivceComponent } from '../../serivce/serivce.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ScrollAnimationDirective,
    SerivceComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
