import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

// ng-gallery's partially compiled bundle throws a TDZ error when loaded in the
// test runner, so replace it with stubs — the page only needs load()/open().
vi.mock('ng-gallery', () => ({
  Gallery: class {
    ref() {
      return { load: () => {} };
    }
  },
  ImageItem: class {},
}));
vi.mock('ng-gallery/lightbox', async () => {
  const { NgModule } = await import('@angular/core');
  @NgModule()
  class LightboxModule {}
  return {
    Lightbox: class {
      open() {}
    },
    LightboxModule,
  };
});

import { Gallery } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { ProjectDetailsPage } from './project-details-page';

describe('ProjectDetailsPage', () => {
  let component: ProjectDetailsPage;
  let fixture: ComponentFixture<ProjectDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetailsPage],
      providers: [provideRouter([]), Gallery, Lightbox],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetailsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
