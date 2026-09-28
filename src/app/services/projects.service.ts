import { Injectable } from '@angular/core';

export type Project = {
  id: number;
  folder: string;
  name: string;
  /** [width, height] of each photo, in file order (1.webp, 2.webp, ...). */
  photos: [number, number][];
};

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      id: 1,
      folder: 'private-house',
      name: 'Private house in Odesa',
      photos: [
        [2560, 1706],
        [1707, 2560],
        [1707, 2560],
        [2560, 1707],
        [1707, 2560],
        [1707, 2560],
        [2560, 1706],
      ],
    },
    {
      id: 2,
      folder: 'shh-beauty',
      name: 'Shh Beauty',
      photos: [
        [2560, 1664],
        [1707, 2560],
        [1707, 2560],
        [2560, 1706],
        [1707, 2560],
        [1707, 2560],
        [1706, 2560],
        [1707, 2560],
      ],
    },
    {
      id: 3,
      folder: 'pure-lounge',
      name: 'Puer Lounge',
      photos: [
        [1920, 2560],
        [2560, 1920],
        [1920, 2560],
        [1920, 2560],
        [1920, 2560],
        [1920, 2560],
        [1920, 2560],
        [1920, 2560],
        [1920, 2560],
      ],
    },
    {
      id: 4,
      folder: 'residence',
      name: 'Residence in Odesa',
      photos: [
        [2560, 1440],
        [2560, 1440],
        [2560, 2560],
        [2560, 2560],
        [2560, 1440],
        [2560, 2560],
        [2560, 2560],
        [2560, 2560],
        [2560, 2560],
        [2560, 2560],
        [2560, 2560],
        [2560, 1440],
        [2560, 1440],
        [2560, 1440],
      ],
    },
    {
      id: 5,
      folder: 'glassly-optic',
      name: 'Glassly Optic',
      photos: [
        [2048, 2560],
        [2048, 2560],
        [2048, 2560],
        [2048, 2560],
        [2048, 2560],
        [2048, 2560],
      ],
    },
    {
      id: 6,
      folder: 'gym-tonic',
      name: 'Gym Tonic',
      photos: [
        [2560, 2560],
        [2560, 1440],
        [2560, 1440],
        [2560, 1440],
        [2560, 1440],
        [2560, 2560],
        [2560, 2560],
      ],
    },
    {
      id: 7,
      folder: 'kadorr-121',
      name: 'Kadorr 121',
      photos: [
        [1440, 2560],
        [1440, 2560],
        [1440, 2560],
        [1867, 2560],
        [1867, 2560],
        [1440, 2560],
        [1867, 2560],
        [1867, 2560],
        [1440, 2560],
        [1440, 2560],
      ],
    },
    {
      id: 8,
      folder: 'golden-era',
      name: 'Golden Era',
      photos: [
        [1920, 2560],
        [1920, 2560],
        [1920, 2560],
        [1920, 2560],
        [1920, 2560],
        [1920, 2560],
        [2560, 1280],
        [1920, 2560],
        [1920, 2560],
      ],
    },
    {
      id: 9,
      folder: 'donskogo-house',
      name: 'Donskogo House',
      photos: [
        [2560, 1440],
        [1440, 2560],
        [2560, 1440],
        [2560, 2048],
        [2560, 1440],
        [2560, 1440],
        [2560, 1440],
      ],
    },
    {
      id: 10,
      folder: 'chesarskie-poland',
      name: 'Chesarskie Poland',
      photos: [
        [1897, 2560],
        [2274, 2560],
        [2274, 2560],
        [1896, 2560],
        [1897, 2560],
        [1896, 2560],
        [1896, 2560],
        [1896, 2560],
        [1897, 2560],
        [1896, 2560],
      ],
    },
    {
      id: 11,
      folder: 'avdeeva-house',
      name: 'Avdeeva House',
      photos: [
        [2560, 1440],
        [2560, 2560],
        [2560, 2560],
        [2560, 2560],
        [2560, 2560],
        [2048, 2560],
        [2048, 2560],
        [2048, 2560],
        [2048, 2560],
      ],
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | null {
    return this.projects.find((project) => project.id === id) ?? null;
  }
}
