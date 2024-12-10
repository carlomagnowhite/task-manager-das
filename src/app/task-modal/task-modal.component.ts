import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-task-modal',
  standalone: true, // Configurar como standalone
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CommonModule, // Importar CommonModule para el pipe titlecase
  ],
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css'],
})
export class TaskModalComponent {
  isEdit: boolean = false;
  title: string = '';
  description: string = '';
  status: string = 'active';
  statusOptions: string[] = ['active', 'completed', 'pending'];

  constructor(
    public dialogRef: MatDialogRef<TaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isEdit = !!data?.id;
    this.title = data?.title || '';
    this.description = data?.description || '';
    this.status = data?.status || 'active';
  }

  save(): void {
    this.dialogRef.close({
      id: this.isEdit ? this.data.id : null,
      title: this.title,
      description: this.description,
      status: this.status,
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
