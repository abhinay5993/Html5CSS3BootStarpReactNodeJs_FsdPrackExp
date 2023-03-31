import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletTestDrivenFormComponent } from './templet-test-driven-form.component';

describe('TempletTestDrivenFormComponent', () => {
  let component: TempletTestDrivenFormComponent;
  let fixture: ComponentFixture<TempletTestDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletTestDrivenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletTestDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
