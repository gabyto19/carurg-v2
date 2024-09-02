import {
  ChangeDetectionStrategy,
  Component,
  inject,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundComponent } from './background/background.component';
import { OrderComponent } from './order/order.component';
import { WelcomeComponent } from './order/welcome/welcome.component';
import { QuickComponent } from './order/quick/quick.component';
import { AdvancedComponent } from './order/advanced/advanced.component';
import { FindusComponent } from './order/findus/findus.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    OrderComponent,
    WelcomeComponent,
    QuickComponent,
    AdvancedComponent,
    FindusComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    ReactiveFormsModule, // Required for Reactive Forms
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
