import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css']
})
export class SosComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this._router.navigate(['welcome']);
    }, 4000);  //2s
  }
}