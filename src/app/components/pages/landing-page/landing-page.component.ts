import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent {

  // code for time and version
  currentYear: number = new Date().getFullYear();
  appVersion: string = '1.0.0';

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // method to hide the button when in top screen
  constructor(private router: Router) {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const button = document.getElementById('moveToTop');
      if (button) {
        if (scrollPosition > 20) {
          button.style.display = 'block';
        } else {
          button.style.display = 'none';
        }
      }
    });
  }


  route(path: string) {
    this.router.navigate([path]);
  }

  // move to top button
  topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
