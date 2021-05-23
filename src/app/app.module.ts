import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule} from "@angular/material/button";
import { FooldalComponent } from './pages/fooldal/fooldal.component';
import { VernyomasrogzitesComponent } from './pages/vernyomasrogzites/vernyomasrogzites.component';
import { VernyomasmodositasComponent } from './pages/vernyomasmodositas/vernyomasmodositas.component';
import { RogziteslistazasComponent } from './pages/rogziteslistazas/rogziteslistazas.component';
import { RogzitestorlesComponent } from './pages/rogzitestorles/rogzitestorles.component';
import { ObservationsComponent } from './components/observations/observations.component';
import { ObservationItemComponent } from './components/observation-item/observation-item.component';
import { MatCardModule } from "@angular/material/card";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireAuthModule} from "@angular/fire/auth";
import { AddObservationComponent } from './components/add-observation/add-observation.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    VernyomasrogzitesComponent,
    VernyomasmodositasComponent,
    RogziteslistazasComponent,
    RogzitestorlesComponent,
    ObservationsComponent,
    ObservationItemComponent,
    AddObservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
