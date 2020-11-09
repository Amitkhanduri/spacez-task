import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexFilterComponent } from './spacex-filter.component';

describe('SpacexFilterComponent', () => {
  let component: SpacexFilterComponent;
  let fixture: ComponentFixture<SpacexFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
