import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cms-paginated-table',
  templateUrl: './cms-paginated-table.component.html',
  styleUrl: './cms-paginated-table.component.scss',
})
export class CmsPaginatedTableComponent {
  title: string = '';
  @Input() data: any[] = [];
  @Input() columns: { key: string; label: string }[] = [];
  @Input() itemsPerPage: number=5;
  @Input() showAddButton: boolean = false;
  @Input() showUpdateButton: boolean = false;

  @Output() addClicked = new EventEmitter<void>();
  @Output() updateClicked = new EventEmitter<any>();
  @Output() pageChanged = new EventEmitter<number>();

  currentPage: number = 1;


  totalPages(): number {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  paginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(startIndex, startIndex + this.itemsPerPage);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
      this.pageChanged.emit(this.currentPage);
    }
  }

  onAddClick() {
    this.addClicked.emit();
  }

  onUpdateClick() {
    const selectedRow = this.data[(this.currentPage - 1) * this.itemsPerPage]; // Replace with real logic
    this.updateClicked.emit(selectedRow);
  }
}
