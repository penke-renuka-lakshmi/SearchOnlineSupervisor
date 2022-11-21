import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSupervisorComponent } from './contact-supervisor.component';

describe('ContactSupervisorComponent', () => {
  let component: ContactSupervisorComponent;
  let fixture: ComponentFixture<ContactSupervisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactSupervisorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
