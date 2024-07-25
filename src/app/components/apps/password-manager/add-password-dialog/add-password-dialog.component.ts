import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Password } from '../../../../models/password';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-password-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './add-password-dialog.component.html',
  styleUrl: './add-password-dialog.component.css'
})
export class AddPasswordDialogComponent {
  passwordForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.passwordForm = new FormGroup({
      name: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  // Method to close the dialog
  closeDialog() {
    this.dialogRef.close();
  }
  // Method to save the new password
  savePassword() {
    if (this.passwordForm.valid) {
      this.dialogRef.close(this.passwordForm.value); // Close the dialog and return the form values
    }
  }
}
