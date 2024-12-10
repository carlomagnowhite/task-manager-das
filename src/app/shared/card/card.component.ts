import { Component, inject, Input } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { Task } from '../../interfaces/Task.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() data: any ;
}
