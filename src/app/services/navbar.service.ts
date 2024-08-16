import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private title: string = 'Chanakya Lite';
  private menuItems: MenuItem[] = [];

  setTitle(title: string) {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }

  setMenuItems(menuItems: MenuItem[]) {
    this.menuItems = menuItems;
  }

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}

export interface MenuItem {
  label: string;
  link?: string;
  dropdownItems?: MenuItem[];
}
