/*
======================================
; Title: contact.component.spec.ts
; Author: Chris Gorham
; Date Created: 23 August 2023
; Last Updated: 23 August 2023
; Description: This code supports the Contact Component
; Sources Used: Bellevue University WEB-450 GitHub
;=====================================
*/

// imports
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
