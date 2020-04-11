import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@workshop/material';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  // Create my local test members
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let de: DebugElement;
  // let projectsService: ProjectsService;

  // const mockProjectsService = {

  // };

  // Instantiate test bed
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        ProjectsComponent,
        ProjectsListComponent,
        ProjectDetailsComponent
      ],
      // providers: [
      //   {
      //     provide: ProjectsService,
      //     useValue: mockProjectsService
      //   }
      // ],
      imports: [
        MaterialModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    }).createComponent(ProjectsComponent);

    component = fixture.componentInstance;
    de = fixture.debugElement;

    // projectsService = de.injector.get(ProjectsService);

    fixture.detectChanges();
  });

  it('should have a primary color of `red`', () => {
    expect(component.primaryColor).toBe('red');
  });

  it('should select a project', () => {
    const emptyProject = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false,
    };

    component.selectProject(emptyProject);

    expect(component.selectedProject).toBe(emptyProject);
  });

  it('should desplay primaryColor', () => {
    const h1 = de.query(By.css('h1'));

    expect(h1.nativeElement.innerText).toBe('red');
  });

  it('should update h1 to new primaryColor', () => {
    const h1 = de.query(By.css('h1'));

    component.primaryColor = 'black';
    fixture.detectChanges();

    expect(h1.nativeElement.innerText).toBe('black');
  });
});
