import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSeletedItemComponent } from './user-seleted-item.component';

describe('UserSeletedItemComponent', () => {
  let component: UserSeletedItemComponent;
  let fixture: ComponentFixture<UserSeletedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSeletedItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSeletedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
