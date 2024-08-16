import { Component, Input ,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { Router, RouterLink, RouterOutlet  } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MenuItem } from '../../services/navbar.service';
import {MatSidenavModule, MatSidenav} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    RouterOutlet,
    RouterLink,
    CommonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers:[AuthService]
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  @Input() title: string = 'Chanakya Lite';
  @Input() menuItems: MenuItem[] = [];
  @ViewChild('sidebar') sidebar!: MatSidenav;
  isSidebarOpen = false;
  userName : string = '@vivekpanchal07';
  constructor(private router: Router, private authService:AuthService) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onBackdropClick() {
    this.sidebar.close();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}