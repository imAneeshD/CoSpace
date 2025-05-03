import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatListModule
  ],
  templateUrl: './admin-settings.component.html',
  styleUrl: './admin-settings.component.scss'
})
export class AdminSettingsComponent {
  settings = {
    workspaceName: '',
    timezone: '',
    notifications: false,
    theme: 'light',
    accentColor: '',
    activityTracking: false,
    dataCollection: false
  };

  timezones = [
    { value: 'UTC', label: 'UTC' },
    { value: 'EST', label: 'Eastern Time' },
    { value: 'PST', label: 'Pacific Time' }
  ];

  themeColors = ['#1976d2', '#9c27b0', '#4caf50', '#ff5722'];

  notificationSettings = [
    { label: 'Email Notifications', enabled: false },
    { label: 'Push Notifications', enabled: false },
    { label: 'Desktop Alerts', enabled: false }
  ];

  saveSettings() {
    // Implement save logic
  }

  cancelChanges() {
    // Implement cancel logic
  }

  changePassword() {
    // Implement password change logic
  }

  enable2FA() {
    // Implement 2FA logic
  }
}
