import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  isMenuOpen: boolean = true;

  constructor() { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    // Initialization logic can go here 
  }

}
