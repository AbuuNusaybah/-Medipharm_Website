import { Component } from '@angular/core';

@Component({
  selector: 'app-activities-page-content',
  templateUrl: './activities-page-content.component.html',
  styleUrl: './activities-page-content.component.scss',
})
export class ActivitiesPageContentComponent {
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

  data = [
    { id: 1, name: 'Activity 1', description: 'Description 1' },
    { id: 2, name: 'Activity 2', description: 'Description 2' },
    { id: 3, name: 'Activity 3', description: 'Description 3' },
    { id: 4, name: 'Activity 4', description: 'Description 4' },
    { id: 5, name: 'Activity 5', description: 'Description 5' },
    { id: 6, name: 'Activity 6', description: 'Description 6' },
    { id: 7, name: 'Activity 7', description: 'Description 7' },
    { id: 8, name: 'Activity 8', description: 'Description 8' },
    { id: 9, name: 'Activity 9', description: 'Description 9' },
    { id: 10, name: 'Activity 10', description: 'Description 10' },
    { id: 11, name: 'Activity 11', description: 'Description 11' },
    { id: 12, name: 'Activity 12', description: 'Description 12' },
    { id: 13, name: 'Activity 13', description: 'Description 13' },
    { id: 14, name: 'Activity 14', description: 'Description 14' },
    { id: 15, name: 'Activity 15', description: 'Description 15' },
    { id: 16, name: 'Activity 16', description: 'Description 16' },
    { id: 17, name: 'Activity 17', description: 'Description 17' },
    { id: 18, name: 'Activity 18', description: 'Description 18' },
    { id: 19, name: 'Activity 19', description: 'Description 19' },
    { id: 20, name: 'Activity 20', description: 'Description 20' },
    { id: 21, name: 'Activity 21', description: 'Description 21' },
    { id: 22, name: 'Activity 22', description: 'Description 22' },
    { id: 23, name: 'Activity 23', description: 'Description 23' },
    { id: 24, name: 'Activity 24', description: 'Description 24' },
    { id: 25, name: 'Activity 25', description: 'Description 25' },
    { id: 26, name: 'Activity 26', description: 'Description 26' },
  ];

  columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description' },
  ];

  onAdd() {
    alert('Add button clicked!');
  }

  onUpdate(event: any) {
    alert(`Update button clicked for: ${JSON.stringify(event)}`);
  }

  onPageChange(page: number) {
    console.log('Page changed to:', page);
  }
}
