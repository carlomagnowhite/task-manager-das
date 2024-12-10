import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { Task } from '../../interfaces/Task.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() data: any ;
  @Output() taskDeleted = new EventEmitter<void>();

  service = inject(SupabaseService);
  
  constructor(){
  }


  deleteTasks(id: string): void {
    try {
      this.service.deleteTask(id).subscribe({
        next: () => {
          console.log('Task deleted:', id);
          this.taskDeleted.emit(); 
        },
        error: (err) => {
          console.error('Error deleting task:', err);
        },
      });
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  }
}
