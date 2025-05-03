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
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  activeTab = 'general';

  settings = {
    // General Settings
    siteName: '',
    language: 'en',
    maintenanceMode: false,

    // User Management Settings
    defaultRole: 'user',
    allowRegistration: true,

    // Security Settings
    require2FA: false,
    sessionTimeout: 30,
    requireSpecialChar: false,
    requireNumbers: false,
    requireUppercase: false,

    // System Status (read-only)
    serverStatus: 'Online',
    lastBackup: '2023-11-15 14:30',
    systemVersion: '1.2.3'
  };

  saveSettings() {
    console.log('Saving settings:', this.settings);
    // TODO: Implement API call to save settings
  }

  resetSettings() {
    console.log('Resetting settings');
    this.settings = {
      siteName: '',
      language: 'en',
      maintenanceMode: false,
      defaultRole: 'user',
      allowRegistration: true,
      require2FA: false,
      sessionTimeout: 30,
      requireSpecialChar: false,
      requireNumbers: false,
      requireUppercase: false,
      serverStatus: 'Online',
      lastBackup: '2023-11-15 14:30',
      systemVersion: '1.2.3'
    };
  }

  backupSystem() {
    console.log('Initiating system backup');
    // TODO: Implement backup functionality
  }

  clearCache() {
    console.log('Clearing system cache');
    // TODO: Implement cache clearing functionality
  }
}
