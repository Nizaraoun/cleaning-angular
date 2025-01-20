import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { LoadingService } from "../../service/LoadingService/loading-service.service";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],  // Import CommonModule for Angular directives like *ngIf
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],

})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {}
}
