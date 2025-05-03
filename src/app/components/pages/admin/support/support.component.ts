import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';


interface Ticket {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  createdAt: Date;
}

interface TeamMember {
  name: string;
  status: string;
}

interface Metrics {
  avgResponseTime: string;
  satisfactionRate: number;
}

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.scss'
})
export class SupportComponent implements OnInit {
  openTicketsCount = 0;
  pendingTicketsCount = 0;
  resolvedToday = 0;
  
  searchQuery = '';
  selectedStatus = '';
  statusOptions = ['Open', 'Pending', 'Resolved', 'Closed'];
  
  tickets: Ticket[] = [];
  teamMembers: TeamMember[] = [];
  metrics: Metrics = {
    avgResponseTime: '2h 15m',
    satisfactionRate: 95
  };

  ngOnInit() {
    // Initialize your data here
    // This is just sample data - replace with actual data fetching
    this.tickets = [
      {
        id: 1,
        title: 'Sample Ticket',
        description: 'Sample description',
        status: 'Open',
        priority: 'high',
        createdAt: new Date()
      }
    ];

    this.teamMembers = [
      { name: 'John Doe', status: 'online' }
    ];

    this.updateTicketCounts();
  }

  private updateTicketCounts() {
    this.openTicketsCount = this.tickets.filter(t => t.status === 'Open').length;
    this.pendingTicketsCount = this.tickets.filter(t => t.status === 'Pending').length;
    this.resolvedToday = this.tickets.filter(t => 
      t.status === 'Resolved' && 
      t.createdAt.toDateString() === new Date().toDateString()
    ).length;
  }
}
