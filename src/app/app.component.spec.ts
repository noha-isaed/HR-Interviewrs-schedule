import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
=======
>>>>>>> 3c2b9d30c3dda0235427825f5bc7ca6c2614cd8d
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [
        RouterTestingModule
      ],
=======
>>>>>>> 3c2b9d30c3dda0235427825f5bc7ca6c2614cd8d
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'HR-interviews-scheduler'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HR-interviews-scheduler');
=======
  it(`should have as title 'HR-interviews'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('HR-interviews');
>>>>>>> 3c2b9d30c3dda0235427825f5bc7ca6c2614cd8d
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span').textContent).toContain('HR-interviews-scheduler app is running!');
=======
    expect(compiled.querySelector('.content span').textContent).toContain('HR-interviews app is running!');
>>>>>>> 3c2b9d30c3dda0235427825f5bc7ca6c2614cd8d
  });
});
