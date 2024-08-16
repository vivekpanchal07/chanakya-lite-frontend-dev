import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component'
import { CommonModule } from '@angular/common';
import { NavbarService, MenuItem } from './services/navbar.service';
import { Observable } from 'rxjs';
import EventEmitter from 'events';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    NavbarComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AuthService, AuthGuard, NavbarService]
})
export class AppComponent {
  title : string = 'Chanakya Lite';
  menuItems: MenuItem[] = [];

  constructor(private authService: AuthService,  private navbarService: NavbarService) {}

  auth(){
    return this.authService.isLoggedIn();
  }

  updateNavbar(event: any){
    this.title = event.navbarService?.title;
    this.menuItems = event.navbarService?.menuItems;
  }
}

