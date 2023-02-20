import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultsComponent } from './pages/results/results.component';
import { AccountComponent } from './pages/account/account.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';


@NgModule({
    declarations: [
        AppComponent,
        ResultsComponent,
        AccountComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatGridListModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatTableModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
