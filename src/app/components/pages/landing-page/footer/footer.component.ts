import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router) {
    // method to hide the button when in top screen
   
  }

  route(path: string) {
    this.router.navigate([path]);
  }

  // code for time and version
  currentYear: number = new Date().getFullYear();
  appVersion: string = '1.0.0';
}
