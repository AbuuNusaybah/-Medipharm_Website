import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cms-sidenav',
  templateUrl: './cms-sidenav.component.html',
  styleUrl: './cms-sidenav.component.scss',
})
export class CmsSidenavComponent {
  @Input() isSidebarVisible: boolean = true;
  isDropdownOpen = false; // Controls dropdown visibility

  @Output() navigate = new EventEmitter<string>();

  constructor(private router: Router) {}

  navigateTo(component: string) {
    this.navigate.emit(component);
  }

  // Toggle the dropdown visibility
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  logout() {
    // Optionally clear authentication data from storage
    localStorage.clear(); // Clear all stored user data
    sessionStorage.clear(); // Clear session storage data
    this.router.navigate(['/login']); // Redirect to the login page
  }
}
