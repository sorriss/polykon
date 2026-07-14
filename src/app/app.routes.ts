import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {AboutPage} from './pages/about-page/about-page';
import {ContactsPage} from './pages/contacs-page/contacts-page.component';
import {ProjectsPage} from './pages/projects-page/projects-page';
import {ProjectDetailsPage} from './pages/project-details-page/project-details-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'projects', component: ProjectsPage },
  { path: 'projects/:id', component: ProjectDetailsPage },
  { path: 'contacts', component: ContactsPage },
  { path: '**', redirectTo: '' }
];
