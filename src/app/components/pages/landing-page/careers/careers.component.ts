import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {

}
