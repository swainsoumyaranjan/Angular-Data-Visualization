import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataComponent } from './view-data.component';

describe('ViewDataComponent', () => {
  let component: ViewDataComponent;
  let fixture: ComponentFixture<ViewDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
