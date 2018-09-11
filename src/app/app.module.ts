import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PageStatusComponent } from './page-status/page-status.component';
import { Backend } from './backend';
import { ItemStatusComponent } from './item-status/item-status.component';
import { StateToImagePipe } from './state-to-image.pipe';

import { AngularResizedEventModule } from 'angular-resize-event';

@NgModule({
  declarations: [
    AppComponent,
    PageStatusComponent,
    ItemStatusComponent,
    StateToImagePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    AngularResizedEventModule,
  ],
  providers: [ Backend ],
  bootstrap: [AppComponent]
})
export class AppModule { }
