import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';
import { SigninComponent } from './component/signin/signin.component';
import { HomeComponent } from './component/home/home.component';
import { ContactSupervisorComponent } from './component/contact-supervisor/contact-supervisor.component';
import { AboutComponent } from './component/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { SosComponent } from './component/sos/sos.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    ContactSupervisorComponent,
    AboutComponent,
    WelcomeComponent,
    ContactUsComponent,
    SosComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [WelcomeComponent, SignupComponent, SigninComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
