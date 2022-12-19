import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClprodComponent } from './clprod.component';

xdescribe('ClprodComponent', () => {
  let component: ClprodComponent;
  let fixture: ComponentFixture<ClprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
