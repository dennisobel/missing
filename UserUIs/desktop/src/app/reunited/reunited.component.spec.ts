import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunitedComponent } from './reunited.component';

describe('ReunitedComponent', () => {
  let component: ReunitedComponent;
  let fixture: ComponentFixture<ReunitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReunitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReunitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
