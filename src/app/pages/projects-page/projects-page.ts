import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects-page',
  imports: [RouterLink],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {
  private readonly languageService = inject(LanguageService);

  protected readonly projects: { id: number; folder: string; name: string; photoCount: number }[] = [
    { id: 1,  folder: 'private-house', name: 'Private house in Odesa',   photoCount: 8 },
    { id: 2,  folder: 'shh-beauty',    name: 'Shh Beauty',      photoCount: 7 },
    { id: 3,  folder: '',              name: '',                 photoCount: 0 },
    { id: 4,  folder: '',              name: '',                 photoCount: 0 },
    { id: 5,  folder: '',              name: '',                 photoCount: 0 },
    { id: 6,  folder: '',              name: '',                 photoCount: 0 },
    { id: 7,  folder: '',              name: '',                 photoCount: 0 },
    { id: 8,  folder: '',              name: '',                 photoCount: 0 },
    { id: 9,  folder: '',              name: '',                 photoCount: 0 },
    { id: 10, folder: '',              name: '',                 photoCount: 0 },
    { id: 11, folder: '',              name: '',                 photoCount: 0 },
  ];

  protected coverImage(folder: string): string {
    return `/assets/images/projects/${folder}/1.png`;
  }

  protected text(key: string): string {
    return this.languageService.t(key);
  }
}
