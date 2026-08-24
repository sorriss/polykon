import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects-page',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {
  private readonly languageService = inject(LanguageService);
  private readonly projectsService = inject(ProjectsService);

  protected readonly projects = this.projectsService.getProjects();

  protected coverImage(folder: string): string {
    return `assets/images/projects/${folder}/1.png`;
  }

  protected text(key: string): string {
    return this.languageService.t(key);
  }
}
