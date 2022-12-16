import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardLayoutComponent } from './card-layout.component';

xdescribe('CardLayoutComponent', () => {
  let component: CardLayoutComponent;
  let fixture: ComponentFixture<CardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
