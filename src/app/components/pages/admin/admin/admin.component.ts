import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../util/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from "../util/topbar/topbar.component";
import { SidebarService } from '../../../../services/admin/sidebar.service';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, CommonModule, TopbarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})

export class AdminComponent implements OnInit {
  isMenuOpen: boolean = true;
  isLargeScreen: boolean = true;
  
  constructor(private sidebarService: SidebarService) {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  ngOnInit(): void {
    this.sidebarService.sidebarState$.subscribe((state: boolean) => {
      if (!this.isLargeScreen) { // Only update if screen is smaller than 768px
        this.isMenuOpen = state;
      }
    });
  }

  private checkScreenSize() {
    this.isLargeScreen = window.innerWidth > 768;
    this.isMenuOpen = this.isLargeScreen;
  }

  shouldBlurContent(): boolean {
    return !this.isLargeScreen && this.isMenuOpen;
  }

  toggleSidebar(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.sidebarService.toggleSidebar(this.isMenuOpen); // Update the sidebar state via the service
  }
}
