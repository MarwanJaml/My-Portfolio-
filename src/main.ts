import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {

  providers: [
    provideRouter(routes),
    provideAnimations()
  ]
}
)
  .catch((err) => console.error(err));
