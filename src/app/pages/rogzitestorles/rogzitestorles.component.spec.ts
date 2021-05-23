import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RogzitestorlesComponent } from './rogzitestorles.component';

describe('RogzitestorlesComponent', () => {
  let component: RogzitestorlesComponent;
  let fixture: ComponentFixture<RogzitestorlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RogzitestorlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RogzitestorlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
