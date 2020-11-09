import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexLaunchComponent } from './spacex-launch.component';

describe('SpacexLaunchComponent', () => {
  let component: SpacexLaunchComponent;
  let fixture: ComponentFixture<SpacexLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
