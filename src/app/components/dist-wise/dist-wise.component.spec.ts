import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistWiseComponent } from './dist-wise.component';

describe('DistWiseComponent', () => {
  let component: DistWiseComponent;
  let fixture: ComponentFixture<DistWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
