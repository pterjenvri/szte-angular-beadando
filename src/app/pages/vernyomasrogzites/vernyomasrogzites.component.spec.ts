import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VernyomasrogzitesComponent } from './vernyomasrogzites.component';

describe('VernyomasrogzitesComponent', () => {
  let component: VernyomasrogzitesComponent;
  let fixture: ComponentFixture<VernyomasrogzitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VernyomasrogzitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VernyomasrogzitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
