import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; // Import Subject for managing the state

@Injectable({
  providedIn: 'root', // This makes the service a singleton and available throughout the app
})
export class SidebarService {
  private sidebarState = new Subject<boolean>(); // Subject to track sidebar state
  sidebarState$ = this.sidebarState.asObservable(); // Observable to subscribe to sidebar state

  constructor() { }

  // Method to toggle the sidebar (true = open, false = close)
  toggleSidebar(state: boolean): void {
    console.log('Sidebar state changed:', state); // Debugging line
    this.sidebarState.next(state); // Emit the state (open or close)
  }
}
