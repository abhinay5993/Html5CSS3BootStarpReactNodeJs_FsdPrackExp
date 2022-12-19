import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveSignInComponent } from './reactive-sign-in.component';

describe('ReactiveSignInComponent', () => {
  let component: ReactiveSignInComponent;
  let fixture: ComponentFixture<ReactiveSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveSignInComponent ],imports:[ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check visibility of LogIN button', () => {
    let fix = TestBed.createComponent(ReactiveSignInComponent);
    console.log('fix val - ',fix);
    let signInBtnEle: HTMLElement = fixture.debugElement.nativeElement.querySelector('.lgp_logBtn');
    console.log('LogIN Button Element - ',signInBtnEle);
    expect(signInBtnEle.innerHTML).toBe('LogIN');
    })

    it('check visibility of SignUp button', () => {
      let fix = TestBed.createComponent(ReactiveSignInComponent);
      let signUpBtnEle: HTMLElement = fixture.debugElement.nativeElement.querySelector('.lgp_regBtn');
      console.log("SignUp Button Element - ",signUpBtnEle);
      expect(signUpBtnEle.innerHTML).toBe('SignUp');
      })

});
