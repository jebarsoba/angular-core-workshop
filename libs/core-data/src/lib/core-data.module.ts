import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectsService } from './projects/projects.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    ProjectsService
  ]
})
export class CoreDataModule {}
