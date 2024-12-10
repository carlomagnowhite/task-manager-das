import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  service = inject(SupabaseService);
  data: any ;
  
  constructor(){
    this.getTasks();
  }


  getTasks(){
    try {
      this.service.getTasks().subscribe((data: any) => {
        this.data = data;
        console.log(this.data);
      })
    } catch (error) {
      throw error;
    }
  }
}
