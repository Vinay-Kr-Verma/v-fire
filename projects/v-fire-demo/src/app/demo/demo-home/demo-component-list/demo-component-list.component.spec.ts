import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentListComponent } from './demo-component-list.component';

describe('DemoComponentListComponent', () => {
  let component: DemoComponentListComponent;
  let fixture: ComponentFixture<DemoComponentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
