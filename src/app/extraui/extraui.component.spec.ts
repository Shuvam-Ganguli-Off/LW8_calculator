import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrauiComponent } from './extraui.component';

describe('ExtrauiComponent', () => {
  let component: ExtrauiComponent;
  let fixture: ComponentFixture<ExtrauiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtrauiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtrauiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
