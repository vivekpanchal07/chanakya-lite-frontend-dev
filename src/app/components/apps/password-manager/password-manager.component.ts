import { Component, OnInit } from '@angular/core';
import { PasswordManagerService } from '../../../services/password-manager.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddPasswordDialogComponent } from './add-password-dialog/add-password-dialog.component';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-password-manager',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [PasswordManagerService, NavbarService],
  templateUrl: './password-manager.component.html',
  styleUrl: './password-manager.component.css'
})
export class PasswordManagerComponent implements OnInit{
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'password', 'website'];
  constructor(private passwordService: PasswordManagerService, 
              private dialog: MatDialog,
              private navbarService: NavbarService) {
    this.navbarService.setTitle('Passcode');
    this.navbarService.setMenuItems([
      { label: 'Home', link: '/' },
      {
        label: 'Configuration',
        dropdownItems: [
          { label: 'Profile', link: '/profile' },
          { label: 'Security', link: '/security' },
        ]
      }
    ])
  }

  ngOnInit(): void {
    this.passwordService.getPasswords().subscribe((passwords) => {
        this.dataSource.data = passwords;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue; // Filter the table
  }
  
  addPassword(){
    const dialogRef = this.dialog.open(AddPasswordDialogComponent,{width:"700px"});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.passwordService.addPassword(result);
        
      }
    });
  }

  deletePassword(row : any){

  }

  editPassword(row : any){

  }
}