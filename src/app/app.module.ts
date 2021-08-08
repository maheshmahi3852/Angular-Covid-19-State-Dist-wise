import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StateWiseComponent } from './components/state-wise/state-wise.component';
import { DistWiseComponent } from './components/dist-wise/dist-wise.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    StateWiseComponent,
    DistWiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule,
     BrowserAnimationsModule,MatStepperModule,
     MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     MatCardModule,
     MatSelectModule,
     MatIconModule,
     MatTooltipModule,
     MatTableModule,
     MatToolbarModule,
     MatProgressSpinnerModule,
     MatSnackBarModule,
     MatTabsModule,
     MatListModule,
     MatDialogModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
