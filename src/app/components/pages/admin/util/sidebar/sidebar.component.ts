import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private router: Router) { }

  route(path: string) {
    console.log('Navigating to:', path); // Debugging line
    this.router.navigate([path]);
  }

  isMenuOpen: boolean = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    // Initialization logic can go here 
  }

}
