import { Injectable } from '@angular/core';

export type Project = {
  id: number;
  folder: string;
  name: string;
  photoCount: number;
};

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projects: Project[] = [
    { id: 1, folder: 'private-house', name: 'Private house in Odesa', photoCount: 7 },
    { id: 2, folder: 'shh-beauty', name: 'Shh Beauty', photoCount: 8 },
    { id: 3, folder: 'pure-lounge', name: 'Puer Lounge', photoCount: 9 },
    { id: 4, folder: 'residence', name: 'Residence in Odesa', photoCount: 14 },
    { id: 5, folder: 'glassly-optic', name: 'Glassly Optic', photoCount: 6 },
    { id: 6, folder: 'gym-tonic', name: 'Gym Tonic', photoCount: 7 },
    { id: 7, folder: 'kadorr-121', name: 'Kadorr 121', photoCount: 10 },
    { id: 8, folder: 'golden-era', name: 'Golden Era', photoCount: 9 },
    { id: 9, folder: 'donskogo-house', name: 'Donskogo House', photoCount: 7 },
    { id: 10, folder: 'chesarskie-poland', name: 'Chesarskie Poland', photoCount: 10 },
    { id: 11, folder: 'avdeeva-house', name: 'Avdeeva House', photoCount: 9 },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | null {
    return this.projects.find((project) => project.id === id) ?? null;
  }
}
