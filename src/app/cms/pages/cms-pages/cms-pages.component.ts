import { Component } from '@angular/core';

@Component({
  selector: 'app-cms-pages',
  templateUrl: './cms-pages.component.html',
  styleUrl: './cms-pages.component.scss',
})
export class CmsPagesComponent {
  title: string = '';
  subtitle: string = '';
  isEditing: boolean = false;

  // Mocked data for demonstration
  fieldData = { title: 'Sample Title', subtitle: 'Sample Subtitle' };

  addField() {
    if (this.title && this.subtitle) {
      console.log('Adding:', { title: this.title, subtitle: this.subtitle });
      // Add the field logic here (e.g., send data to the backend or store it)
      this.clearFields();
    } else {
      console.log('Title and Subtitle are required');
    }
  }

  updateField() {
    if (this.title && this.subtitle) {
      console.log('Updating:', { title: this.title, subtitle: this.subtitle });
      // Update the field logic here
      this.clearFields();
    } else {
      console.log('Title and Subtitle are required');
    }
  }

  clearFields() {
    this.title = '';
    this.subtitle = '';
    this.isEditing = false;
  }

  // Optional: Logic to edit an existing field
  startEditing() {
    this.title = this.fieldData.title;
    this.subtitle = this.fieldData.subtitle;
    this.isEditing = true;
  }
}
