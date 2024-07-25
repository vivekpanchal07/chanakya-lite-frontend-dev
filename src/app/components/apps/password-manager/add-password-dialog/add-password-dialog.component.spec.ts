import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPasswordDialogComponent } from './add-password-dialog.component';

describe('AddPasswordDialogComponent', () => {
  let component: AddPasswordDialogComponent;
  let fixture: ComponentFixture<AddPasswordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPasswordDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
