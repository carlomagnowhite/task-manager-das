import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { SupabaseService } from './services/supabase.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, HttpClientModule],
  providers: [SupabaseService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager-das';
  service = inject(SupabaseService);
  data: any = [];
  
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
