import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedFeatureComponent } from './managed-feature.component';

describe('ManagedFeatureComponent', () => {
  let component: ManagedFeatureComponent;
  let fixture: ComponentFixture<ManagedFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
