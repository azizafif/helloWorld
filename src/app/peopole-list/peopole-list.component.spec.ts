import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopoleListComponent } from './peopole-list.component';

describe('PeopoleListComponent', () => {
  let component: PeopoleListComponent;
  let fixture: ComponentFixture<PeopoleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopoleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
