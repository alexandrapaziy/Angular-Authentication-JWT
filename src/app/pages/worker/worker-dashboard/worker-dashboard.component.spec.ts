import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDashboardComponent } from './worker-dashboard.component';

describe('WorkerDashboardComponent', () => {
  let component: WorkerDashboardComponent;
  let fixture: ComponentFixture<WorkerDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkerDashboardComponent]
    });
    fixture = TestBed.createComponent(WorkerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
