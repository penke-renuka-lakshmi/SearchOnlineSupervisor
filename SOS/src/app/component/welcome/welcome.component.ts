import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  title = 'SOS';
  very_dissatisfied = 1;
  constructor(private _router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  feedback(id = '') {
    sessionStorage.setItem('feedback', id);
    this.navigate('signin');
  }
  navigate(id: string) {
    if (id == 'home') this._router.navigate(['/home']);
    if (id == 'about') this._router.navigate(['/about']);
    if (id == 'signup') this._router.navigate(['/signup']);
    if (id == 'signin') this._router.navigate(['/signin']);
    if (id == 'welcome') this._router.navigate(['/welcome']);
  }
  contactUs() {
    this.dialog.open(ContactUsComponent, {});
  }
}
