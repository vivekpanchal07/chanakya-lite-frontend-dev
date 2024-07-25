import { Component, OnInit, ViewChild } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet  } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  searchQuery = '';
  @ViewChild('drawer') drawer!: MatDrawer; // Add a viewchild for the drawer
  constructor(private router: Router) {}
  ngOnInit(): void {}
  // Function to handle search (you'll need to implement this)
  search() {
    // ... handle the search query ...
  }
  // Function to navigate to the home route
  goToHome() {
    this.router.navigate(['/']);
  }
  // Function to handle navigation to the password manager
  goToPasswordManager() {
    this.router.navigate(['/password-manager']);
  }

  login(){
    
  }
}
