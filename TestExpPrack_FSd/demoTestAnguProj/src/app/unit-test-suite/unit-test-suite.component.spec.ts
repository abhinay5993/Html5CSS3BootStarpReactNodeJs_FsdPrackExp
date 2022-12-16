import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitTestSuiteComponent } from './unit-test-suite.component';

describe('UnitTestSuiteComponent', () => {
  let component: UnitTestSuiteComponent;
  let fixture: ComponentFixture<UnitTestSuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitTestSuiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitTestSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "Unit TestSuite works!!"', () => {
    let fix = TestBed.createComponent(UnitTestSuiteComponent);
    const bannerElement: HTMLElement = fix.nativeElement;
    console.log("Banner Element",bannerElement);
    console.log(bannerElement.querySelector('p'))
    expect(bannerElement.textContent).toContain('LOGIN');
    });

    it('Check LOGIN text', () => {
      let fix = TestBed.createComponent(UnitTestSuiteComponent);
      let buttonElement: HTMLElement = fixture.debugElement.nativeElement.querySelector('.set_button');
      console.log("Button Element",buttonElement);
      expect(buttonElement.innerHTML).toBe('LOGIN');
      });
  
});
