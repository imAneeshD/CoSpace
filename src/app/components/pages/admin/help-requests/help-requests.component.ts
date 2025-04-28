import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface HelpRequest {
  id: number;
  userName: string;
  subject: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'RESOLVED';
  date: Date;
}

@Component({
  selector: 'app-help-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help-requests.component.html',
  styleUrls: ['./help-requests.component.scss']
})
export class HelpRequestsComponent implements OnInit {
  totalRequests: number = 0;
  pendingRequests: number = 0;
  resolvedRequests: number = 0;
  avgResponseTime: string = '0h';
  helpRequests: HelpRequest[] = [];

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    // Mock data
    this.totalRequests = 150;
    this.pendingRequests = 45;
    this.resolvedRequests = 105;
    this.avgResponseTime = '4h';
    
    this.helpRequests = [
      {
        id: 1,
        userName: 'John Doe',
        subject: 'Login Issue',
        status: 'PENDING',
        date: new Date()
      },
      {
        id: 2,
        userName: 'Jane Smith',
        subject: 'Access Problem',
        status: 'IN_PROGRESS',
        date: new Date()
      }
    ];
  }

  updateStatus(requestId: number, event: Event) {
    const newStatus = (event.target as HTMLSelectElement).value as HelpRequest['status'];
    const request = this.helpRequests.find(r => r.id === requestId);
    if (request) {
      request.status = newStatus;
      // TODO: Call API to update status
      console.log(`Updated request ${requestId} status to ${newStatus}`);
    }
  }

  viewRequest(id: number) {
    console.log('Viewing request:', id);
  }

  editRequest(id: number) {
    console.log('Editing request:', id);
  }
}
