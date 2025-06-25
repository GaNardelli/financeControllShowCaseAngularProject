/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

bootstrapApplication(App, {
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
});