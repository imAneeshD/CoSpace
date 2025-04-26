import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { SidebarComponent } from "../util/sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  currentDate: Date = new Date();

  ngOnInit() {
    // If you need to update the date periodically, you can use this:
    // setInterval(() => {
    //   this.currentDate = new Date();
    // }, 1000); // Updates every second


    // Chart configuration

    // User Activity Chart
    const userActivityCtx = document.getElementById('userActivityChart') as HTMLCanvasElement;
    new Chart(userActivityCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Active Users',
          data: [65, 59, 80, 81, 56, 55],
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      }
    });

    // Revenue Trend Chart
    const revenueTrendCtx = document.getElementById('revenueTrendChart') as HTMLCanvasElement;
    new Chart(revenueTrendCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue ($)',
          data: [12000, 19000, 15000, 25000, 22000, 30000],
          backgroundColor: 'rgba(54, 162, 235, 0.5)'
        }]
      }
    });

  }





}
