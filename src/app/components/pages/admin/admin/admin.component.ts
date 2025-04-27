import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from "../util/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from "../util/topbar/topbar.component";

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
  
  constructor() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  ngOnInit(): void {
  }


  private checkScreenSize() {
    this.isLargeScreen = window.innerWidth > 768;
    this.isMenuOpen = this.isLargeScreen;
    console.log(this.isMenuOpen);
  }
}
