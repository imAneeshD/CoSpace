import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../../../../services/admin/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private router: Router, private sidebarService: SidebarService) { }

  // This method handles navigation and closes the sidebar after the route change
  route(path: string): void {
    console.log('Navigating to:', path); // Debugging line
    this.router.navigate([path]).then(() => {
      this.sidebarService.toggleSidebar(false); // Close the sidebar after navigation
    });
  }

  // Method to toggle the sidebar from within the sidebar component itself
  toggleMenu(): void {
    this.sidebarService.toggleSidebar(!this.isMenuOpen); // Toggle the sidebar visibility using the service
  }

  isMenuOpen: boolean = true; // Local state for the sidebar (optional if you want to track the menu status)

  ngOnInit(): void {
    // Initialize any other logic if needed
  }


  isActiveRoute(route: string): any {
    return this.router.url.includes(route); // Check if the current route includes the specified route
  }
}
