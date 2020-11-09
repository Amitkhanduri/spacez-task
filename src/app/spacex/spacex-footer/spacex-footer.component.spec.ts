import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexFooterComponent } from './spacex-footer.component';

describe('SpacexFooterComponent', () => {
  let component: SpacexFooterComponent;
  let fixture: ComponentFixture<SpacexFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
