import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactSupervisorComponent } from './component/contact-supervisor/contact-supervisor.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { SosComponent } from './component/sos/sos.component';
import { WelcomeComponent } from './component/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactsupervisor', component: ContactSupervisorComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'sos', component: SosComponent },
  { path: '', redirectTo: 'sos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
