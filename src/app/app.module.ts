import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table'
import { StatCardComponent } from './stat-card/stat-card.component'
import { ChartsModule } from 'ng2-charts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { PatientService } from './service/patient.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { AuthService } from './auth.service';
import { PatientTableComponent } from './patient-table/patient-table.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';

 
var firebaseConfig = {
  apiKey: "AIzaSyCwMRmTIHQ3isQmEqz66_vjkc1KTzKQl4U",
  authDomain: "vcare-78b35.firebaseapp.com",
  databaseURL: "https://vcare-78b35.firebaseio.com",
  projectId: "vcare-78b35",
  storageBucket: "vcare-78b35.appspot.com",
  messagingSenderId: "127145721534",
  appId: "1:127145721534:web:c610018a62ea41a93068ef",
  measurementId: "G-QG823VDBLT"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StatCardComponent,
    PieChartComponent,
    AddDialogComponent,
    PatientTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FlexLayoutModule,
    MatToolbarModule,
    ChartsModule,
    MatTableModule,
    MatRadioModule,
    MatPaginatorModule,
    HttpClientModule,
    MatGridListModule,
    MatDialogModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  entryComponents: [
    AddDialogComponent
  ],
  providers: [PatientService,AuthService,{
    provide: MatDialogRef,
    useValue: {}
  },],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
