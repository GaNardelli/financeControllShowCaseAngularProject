import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, MatSidenavModule, MatListModule, MatIconModule, RouterLink],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'financeControll';
}
