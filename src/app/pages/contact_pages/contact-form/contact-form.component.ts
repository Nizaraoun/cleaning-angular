import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {

  ngOnInit(): void {
    this.scrollOnceByTenPx();
  }

  scrollOnceByTenPx(): void {
    window.scrollBy(0, 50); // Scrolls 10px down on the Y-axis
  }

}
