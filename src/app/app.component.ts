import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';

registerLocaleData(localeEn, 'en');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Inject(LOCALE_ID) public locale: string;

  title = 'Evaluation Portal';

  ngOnInit() {
    console.log(this.locale);
  }
}
