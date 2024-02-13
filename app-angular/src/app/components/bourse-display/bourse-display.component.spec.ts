import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BourseDisplayComponent } from './bourse-display.component';

describe('BourseDisplayComponent', () => {
  let component: BourseDisplayComponent;
  let fixture: ComponentFixture<BourseDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BourseDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BourseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
