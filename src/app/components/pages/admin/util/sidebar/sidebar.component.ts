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


  isActiveRoute(route: string): boolean {    
    return location.pathname.includes(route);
  }

  constructor(private router: Router) { 
    console.log(location.pathname); // Debugging line
  }

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
