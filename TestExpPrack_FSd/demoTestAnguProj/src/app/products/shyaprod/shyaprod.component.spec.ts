import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShyaprodComponent } from './shyaprod.component';

xdescribe('ShyaprodComponent', () => {
  let component: ShyaprodComponent;
  let fixture: ComponentFixture<ShyaprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShyaprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShyaprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
