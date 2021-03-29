import {Component} from '@angular/core';
import {CountryService} from './services/country.service';
import {PAGES} from './constants/constants';
import {UpdateService} from './services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string;
  results: string[];
  utente: any;
  pages = PAGES;
  updateVisible: boolean;


  constructor(
    public updateService: UpdateService) {
  }

  search(event): void {
  }

  logout(): void {
  }

  public update(): void {
    this.updateService.resetUpdateEvent();
    this.updateVisible = false;
    window.location.reload();
  }
}
