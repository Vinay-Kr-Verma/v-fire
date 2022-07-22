import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VFireLibComponent } from './v-fire-lib.component';

describe('VFireLibComponent', () => {
  let component: VFireLibComponent;
  let fixture: ComponentFixture<VFireLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VFireLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VFireLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
