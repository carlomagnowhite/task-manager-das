import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from '../../task-modal/task-modal.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  service = inject(SupabaseService);
  dialog = inject(MatDialog); // Inyectar MatDialog
  data: any;

  constructor() {
    this.getTasks();
  }

  getTasks() {
    try {
      this.service.getTasks().subscribe((data: any) => {
        this.data = data;
        console.log(this.data);
      });
    } catch (error) {
      throw error;
    }
  }

  openTaskModal(): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '400px',
      data: {}, // Objeto vacío para modo "añadir"
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Nueva tarea creada:', result);
        this.addTask(result);
      }
    });
  }

  addTask(newTask: any): void {
    //Creamos un objeto de tipo Task con los datos a añadir
    newTask = {
      title: newTask.title,
      description: newTask.description,
      status: newTask.status,
      created_at: 'now()'
    };
    try {
      this.service.addTask(newTask).subscribe({
        next: () => {
          console.log('Tarea añadida:', newTask);
          this.getTasks(); // Recargar tareas
        },
        error: (err) => console.error('Error añadiendo tarea:', err),
      });
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  }
}
