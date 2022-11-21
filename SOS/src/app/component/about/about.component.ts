import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  navigate(id: string) {
    if (id == 'home') this._router.navigate(['/home']);
    if (id == 'about') this._router.navigate(['/about']);
    if (id == 'welcome') this._router.navigate(['/welcome']);
  }
  contactUs() {
    this.dialog.open(ContactUsComponent, {});
  }
}