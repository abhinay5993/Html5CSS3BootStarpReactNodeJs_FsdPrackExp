import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModloginComponent } from './forms-modlogin.component';

xdescribe('FormsModloginComponent', () => {
  let component: FormsModloginComponent;
  let fixture: ComponentFixture<FormsModloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsModloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsModloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
