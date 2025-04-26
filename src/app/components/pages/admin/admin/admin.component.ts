import { Component } from '@angular/core';
import { SidebarComponent } from "../util/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  isMenuOpen: boolean = true;
}
