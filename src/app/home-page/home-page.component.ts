import { Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { NgxGpAutocompleteDirective, NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ CardModule, ButtonModule, DividerModule, InputTextModule, NgxGpAutocompleteModule ],
  providers: [
    {
      provide: Loader,
      useValue: new Loader({
        apiKey: 'AIzaSyAFIB6nswepqeSIcuS_YPNXM1vTPVAOsLQ',
        libraries: ['places']
      })
    },
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToPlanning() {
    this.router.navigate(['/planning']);
  }

  public handleAddressChange(place: google.maps.places.PlaceResult) {
    if (place.geometry) {
      console.log(place);
    }
  }

}
