import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { BirthdayAdminComponent } from './birthday-admin/birthday-admin.component';
import { BirthdayPublicComponent } from './birthday-public/birthday-public.component';

const routes: Routes = [
  { path: '', component: BirthdayPublicComponent },
  { path: 'admin', component: BirthdayAdminComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
