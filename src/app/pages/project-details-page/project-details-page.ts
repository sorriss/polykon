import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Project, ProjectsService } from '../../services/projects.service';
import { Gallery, ImageItem } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-project-details-page',
  imports: [RouterLink, NgOptimizedImage, LightboxModule],
  templateUrl: './project-details-page.html',
  styleUrl: './project-details-page.scss',
})
export class ProjectDetailsPage {
  private readonly route = inject(ActivatedRoute);
  private readonly languageService = inject(LanguageService);
  private readonly projectsService = inject(ProjectsService);
  private readonly gallery = inject(Gallery);
  private readonly lightbox = inject(Lightbox);

  protected readonly galleryId = 'project-details-gallery';
  private readonly galleryRef = this.gallery.ref(this.galleryId);

  private readonly projectId = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  protected readonly project = computed<Project | null>(() => {
    const id = Number(this.projectId().get('id'));
    if (Number.isNaN(id)) {
      return null;
    }
    return this.projectsService.getProjectById(id);
  });

  protected readonly imageUrls = computed<string[]>(() => {
    const project = this.project();
    if (!project) {
      return [];
    }
    return Array.from(
      { length: project.photoCount },
      (_, index) => `/assets/images/projects/${project.folder}/${index + 1}.png`,
    );
  });

  constructor() {
    effect(() => {
      const project = this.project();
      const urls = this.imageUrls();
      if (!project || urls.length === 0) {
        this.galleryRef.load([]);
        return;
      }

      this.galleryRef.load(
        urls.map(
          (url, index) =>
            new ImageItem({
              src: url,
              thumb: url,
              alt: `${project.name} photo ${index + 1}`,
            }),
        ),
      );
    });
  }

  protected text(key: string): string {
    return this.languageService.t(key);
  }

  protected openFullscreen(index: number): void {
    this.lightbox.open(index, this.galleryId, {
      panelClass: ['g-overlay', 'fullscreen'],
      backdropClass: 'g-backdrop',
    });
  }
}
