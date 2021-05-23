import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VernyomasmodositasComponent } from './vernyomasmodositas.component';

describe('VernyomasmodositasComponent', () => {
  let component: VernyomasmodositasComponent;
  let fixture: ComponentFixture<VernyomasmodositasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VernyomasmodositasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VernyomasmodositasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
