import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletdriveformsexpComponent } from './templetdriveformsexp.component';

describe('TempletdriveformsexpComponent', () => {
  let component: TempletdriveformsexpComponent;
  let fixture: ComponentFixture<TempletdriveformsexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletdriveformsexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletdriveformsexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
