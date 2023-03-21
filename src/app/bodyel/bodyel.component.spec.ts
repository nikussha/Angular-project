import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyelComponent } from './bodyel.component';

describe('BodyelComponent', () => {
  let component: BodyelComponent;
  let fixture: ComponentFixture<BodyelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
