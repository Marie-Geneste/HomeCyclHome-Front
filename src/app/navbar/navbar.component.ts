import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule,  TieredMenuModule, TooltipModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
      this.items = [
          {
            label: 'Accueil',
            icon: 'pi pi-home',
            route: '/'
          },
          {
            separator: true
          },
          {
            label: 'Produits',
            icon: 'pi pi-box',
            route: '/products'
          },
          {
            separator: true
          },
          {
            label: 'Tableau de bord',
            icon: 'pi pi-user',
            route: '/profile'
          }
      ]
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToHomePage() {
    this.router.navigate(['/']);
  }
}
