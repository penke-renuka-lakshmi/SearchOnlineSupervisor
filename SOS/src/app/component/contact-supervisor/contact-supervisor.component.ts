import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-supervisor',
  templateUrl: './contact-supervisor.component.html',
  styleUrls: ['./contact-supervisor.component.css']
})
export class ContactSupervisorComponent implements OnInit {

  constructor(private _router: Router,
    public dialogRef: MatDialogRef<ContactSupervisorComponent>) { dialogRef.disableClose = true; }

  ngOnInit(): void {
  }
  navigate(id: string) {
    if (id == 'home') this._router.navigate(['/home']);
    if (id == 'about') this._router.navigate(['/about']);
    if (id == 'welcome') this._router.navigate(['/welcome']);
  }
  confirmRequest() { }

  cancel() {
    this.dialogRef.close();
  }
}
