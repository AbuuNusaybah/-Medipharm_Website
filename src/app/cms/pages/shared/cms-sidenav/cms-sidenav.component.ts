import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cms-sidenav',
  templateUrl: './cms-sidenav.component.html',
  styleUrl: './cms-sidenav.component.scss',
})
export class CmsSidenavComponent {
  @Input() isSidebarVisible: boolean = true;
  @Output() navigate = new EventEmitter<string>();

  constructor(private router: Router) {}


  navigateTo(component: string){
    this.navigate.emit(component);
  }



  logout() {
    // Optionally clear authentication data from storage
    localStorage.clear(); // Clear all stored user data
    sessionStorage.clear(); // Clear session storage data
    this.router.navigate(['/login']); // Redirect to the login page
  }
}
