import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBuddyComponent } from './find-buddy.component';

describe('FindBuddyComponent', () => {
  let component: FindBuddyComponent;
  let fixture: ComponentFixture<FindBuddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindBuddyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindBuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
