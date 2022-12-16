import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoRountComponent } from './demo-rount.component';

xdescribe('DemoRountComponent', () => {
  let component: DemoRountComponent;
  let fixture: ComponentFixture<DemoRountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoRountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoRountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
