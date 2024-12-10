import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from '../../task-modal/task-modal.component';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() data: any; 
  @Output() taskDeleted = new EventEmitter<void>();

  service = inject(SupabaseService);
  dialog = inject(MatDialog);

  constructor() {}

  openTaskModal(): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '400px',
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Creamos un objeto de tipo Task con los datos actualizados
        const updatedTask = {
          id: this.data.id,
          title: result.title,
          description: result.description,
          status: result.status,
          created_at: this.data.created_at,
        };

        this.service.updateTask(updatedTask).subscribe({
          next: () => {
            this.refreshTaskData();
          },
          error: (err) => console.error('Error updating task:', err),
        });
      }
    });
  }

  deleteTasks(id: string): void {
    this.service.deleteTask(id).subscribe({
      next: () => {
        console.log('Task deleted:', id);
        this.taskDeleted.emit();
      },
      error: (err) => console.error('Error deleting task:', err),
    });
  }

  refreshTaskData(): void {
    this.service.getTaskById(this.data.id).subscribe({
      next: (task: any) => {
        this.data = task[0];
      },
      error: (err) => console.error('Error fetching task:', err),
    });
  }
}