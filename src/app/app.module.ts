import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { Inject, LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatIconRegistry,
  MatSliderModule,
  MatSnackBar,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutComponent } from './about/about.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DIsplayYearComponent } from './display-year/display-year.component';
import * as moment from 'moment';
import 'moment/locale/de';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { InstallPromptService } from './services/install-prompt.service';

@NgModule({
  declarations: [AppComponent, AboutComponent, NewEntryComponent, DIsplayYearComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSliderModule,
    MatSnackBarModule,
    HttpClientModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent, NewEntryComponent]
})
export class AppModule {
  constructor(
    san: DomSanitizer,
    registry: MatIconRegistry,
    private updates: SwUpdate,
    private snackBar: MatSnackBar,
    private promptService: InstallPromptService,
    @Inject(LOCALE_ID) locale
  ) {
    registry.addSvgIconSet(san.bypassSecurityTrustResourceUrl('assets/icons/set.svg'));
    moment.locale(locale.includes('de') ? 'de' : 'en');

    window.addEventListener('beforeinstallprompt', e => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      this.promptService.saveEvent(e);
    });
    this.updates.available.subscribe(() => {
      this.snackBar
        .open(
          locale.includes('de')
            ? 'Eine neue Version dieser Anwendung ist verfuegbar'
            : 'A new version of this app is available',
          locale.includes('de') ? 'Jetzt laden' : 'Update now'
        )
        .afterDismissed()
        .subscribe(({ dismissedByAction }) => {
          if (dismissedByAction) {
            this.updates.activateUpdate().then(() => document.location.reload());
          }
        });
    });
  }
}
