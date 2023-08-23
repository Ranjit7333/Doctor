import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContPageComponent } from './main-cont-page.component';

describe('MainContPageComponent', () => {
  let component: MainContPageComponent;
  let fixture: ComponentFixture<MainContPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MainContPageComponent]
    });
    fixture = TestBed.createComponent(MainContPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
