import { Component } from '@angular/core';
import { WhyUsComponent } from "../../../shared/why-us/why-us.component";
import { LikeUsComponent } from "../../../shared/like-us/like-us.component";
import { HeaderWidgetComponent } from "../../../shared/header-widget/header-widget.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [WhyUsComponent, LikeUsComponent, HeaderWidgetComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['/src/assets/css/clanora.css', '/src/assets/css/libraries.css'],
})
export class AboutUsComponent {

}
