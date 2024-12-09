import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ContainerComponent } from './container/container.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [CardComponent, ContainerComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [CardComponent, ContainerComponent]
})
export class SharedModule { }
