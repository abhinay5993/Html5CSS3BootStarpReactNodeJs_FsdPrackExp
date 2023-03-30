import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrhomeComponent } from './clrhome.component';

describe('ClrhomeComponent', () => {
  let component: ClrhomeComponent;
  let fixture: ComponentFixture<ClrhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClrhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClrhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
