import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface MenuItem {
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  prepTime: number;
  calories: number;
  isVeg: boolean;
  isAvailable: boolean;
}

interface CategoryStat {
  name: string;
  count: number;
}

interface Metrics {
  revenue: number;
  orders: number;
}

@Component({
  selector: 'app-canteen-menu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './canteen-menu.component.html',
  styleUrl: './canteen-menu.component.scss'
})
export class CanteenMenuComponent implements OnInit {
  // Dashboard stats
  totalItems: number = 0;
  popularItems: number = 0;
  todaysSales: number = 0;

  // Search and filter
  searchQuery: string = '';
  selectedCategory: string = '';
  categories: string[] = [];

  // Menu items and stats
  menuItems: MenuItem[] = [];
  categoryStats: CategoryStat[] = [];
  metrics: Metrics = { revenue: 0, orders: 0 };

  ngOnInit() {
    this.loadMenuItems();
    this.loadCategories();
    this.loadMetrics();
  }

  addNewItem() {
    // TODO: Implement add new item logic
  }

  editItem(item: MenuItem) {
    // TODO: Implement edit item logic
  }

  deleteItem(item: MenuItem) {
    // TODO: Implement delete item logic
  }

  private loadMenuItems() {
    // Example data - replace with actual API call
    this.menuItems = [
      {
        name: 'Classic Margherita Pizza',
        price: 299,
        description: 'Fresh mozzarella, tomatoes, and basil on thin crust',
        category: 'Main Course',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP0HbRY0SsECXq3XHqjXUBw3CqK1VfE5PX1w&s',
        prepTime: 20,
        calories: 800,
        isVeg: true,
        isAvailable: true
      },
      {
        name: 'Chocolate Brownie',
        price: 149,
        description: 'Rich chocolate brownie with vanilla ice cream',
        category: 'Desserts',
        image: 'https://www.thereciperebel.com/wp-content/uploads/2022/05/brownie-sundae-TRR-1200-25-of-40.jpg',
        prepTime: 10,
        calories: 450,
        isVeg: true,
        isAvailable: true
      },
      {
        name: 'English Breakfast',
        price: 399,
        description: 'Eggs, bacon, sausages, beans, and toast',
        category: 'Breakfast',
        image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2022/10/full-english-breakfast-18.jpg',
        prepTime: 15,
        calories: 950,
        isVeg: false,
        isAvailable: true
      }
    ];
    this.totalItems = this.menuItems.length;
  }

  private loadCategories() {
    // Example data - replace with actual API call
    this.categories = ['Breakfast', 'Main Course', 'Desserts'];
    this.categoryStats = this.categories.map(cat => ({
      name: cat,
      count: Math.floor(Math.random() * 10)
    }));
  }

  private loadMetrics() {
    // Example data - replace with actual API call
    this.metrics = {
      revenue: 15000,
      orders: 45
    };
    this.popularItems = 5;
    this.todaysSales = this.metrics.orders;
  }
}
