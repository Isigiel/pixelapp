import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatIconModule, MatIconRegistry, MatSliderModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AboutComponent} from './about/about.component';
import {NewEntryComponent} from './new-entry/new-entry.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DIsplayYearComponent} from './display-year/display-year.component';
import * as moment from 'moment';
import 'moment/locale/de';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NewEntryComponent,
    DIsplayYearComponent
  ],
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
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent, NewEntryComponent]
})
export class AppModule {
  constructor(san: DomSanitizer, registry: MatIconRegistry) {
    registry.addSvgIconSet(san.bypassSecurityTrustResourceUrl('/assets/icons/set.svg'));
    moment.locale('de');
  }
}
