import { Component } from '@angular/core';
import { AnnouncementComponent } from "../../../shared/announcement/announcement.component";
import { WhyUsComponent } from "../../../shared/why-us/why-us.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AnnouncementComponent, WhyUsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
