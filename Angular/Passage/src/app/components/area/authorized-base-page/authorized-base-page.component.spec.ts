import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedBasePageComponent } from './authorized-base-page.component';

describe('AuthorizedBasePageComponent', () => {
  let component: AuthorizedBasePageComponent;
  let fixture: ComponentFixture<AuthorizedBasePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthorizedBasePageComponent]
    });
    fixture = TestBed.createComponent(AuthorizedBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
