import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private _router: Router,
    public dialogRef: MatDialogRef<ContactUsComponent>) { dialogRef.disableClose = true; }

  ngOnInit(): void {
  }
  navigate(id: string) {
    if (id == 'home') this._router.navigate(['/home']);
    if (id == 'about') this._router.navigate(['/about']);
    if (id == 'welcome') this._router.navigate(['/welcome']);
  }
  cancel() {
    this.dialogRef.close();
  }
}
