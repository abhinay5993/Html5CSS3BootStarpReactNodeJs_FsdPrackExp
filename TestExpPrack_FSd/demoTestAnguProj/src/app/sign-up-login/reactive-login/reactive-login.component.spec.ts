import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveLoginComponent } from './reactive-login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ReactiveLoginComponent', () => {
  let component: ReactiveLoginComponent;
  let fixture: ComponentFixture<ReactiveLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveLoginComponent ],imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

    it('check visibility of SignUp-Me button', () => {
      let fix = TestBed.createComponent(ReactiveLoginComponent);
      console.log('fix val - ',fix);
      let signUpBtnEle: HTMLElement = fixture.debugElement.nativeElement.querySelector('.reg_btn');
      console.log('SignUp-Me Button Element - ',signUpBtnEle);
      expect(signUpBtnEle.innerHTML).toBe('SignUp');
      })
  
      it('check visibility of SignIn button', () => {
        let fix = TestBed.createComponent(ReactiveLoginComponent);
        let logInBtnEle: HTMLElement = fixture.debugElement.nativeElement.querySelector('.login_btn');
        console.log("SignIn Button Element - ",logInBtnEle);
        expect(logInBtnEle.innerHTML).toBe('SignIn');
        })
        
});
