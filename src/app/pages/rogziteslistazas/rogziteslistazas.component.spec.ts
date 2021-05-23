import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RogziteslistazasComponent } from './rogziteslistazas.component';

describe('RogziteslistazasComponent', () => {
  let component: RogziteslistazasComponent;
  let fixture: ComponentFixture<RogziteslistazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RogziteslistazasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RogziteslistazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
