import { Component } from '@angular/core';

@Component({
  selector: 'app-cms-landing',
  templateUrl: './cms-landing.component.html',
  styleUrl: './cms-landing.component.scss',
})
export class CmsLandingComponent {
  isSidebarVisible: boolean = true;

  activeComponent: string = 'landing'; // Tracks the currently active component

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  handleNavigation(component: string): void {
    this.activeComponent = component;
  }
}
