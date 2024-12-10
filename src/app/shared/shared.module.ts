import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ContainerComponent } from './container/container.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { SupabaseService } from '../services/supabase.service';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [CardComponent, ContainerComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatChipsModule, 
    HttpClientModule,
    MatButtonModule
  ],
  exports: [CardComponent, ContainerComponent],
  providers: [SupabaseService],
})
export class SharedModule { }
