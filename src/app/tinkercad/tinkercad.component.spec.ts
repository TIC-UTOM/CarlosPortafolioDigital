import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinkercadComponent } from './tinkercad.component';

describe('TinkercadComponent', () => {
  let component: TinkercadComponent;
  let fixture: ComponentFixture<TinkercadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinkercadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinkercadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
