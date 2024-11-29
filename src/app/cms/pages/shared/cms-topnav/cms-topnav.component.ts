import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cms-topnav',
  templateUrl: './cms-topnav.component.html',
  styleUrl: './cms-topnav.component.scss',
})
export class CmsTopnavComponent {
  @Output() toggle = new EventEmitter<void>();

  toggleSidebar() {
    this.toggle.emit();
  }
}
