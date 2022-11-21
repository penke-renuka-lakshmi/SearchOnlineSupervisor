import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { APIService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr'
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),

  });
  submitted = false;
  mail: string = "";
  getFeedback:any;
  password: string = "";
  constructor(private _router: Router,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private api_service: APIService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getFeedback = sessionStorage.getItem('feedback');
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@wilp.bits-pilani.ac.in$')]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],

      },
    );
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const payload = {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
      feedback: this.getFeedback
    }
    this.api_service.sign_in(payload).subscribe(res => {
      if (res) {
        sessionStorage.getItem('feedback') ? this.toastr.success('Thankyou for the feedback. Your ratings has been saved.') : this.toastr.success('Successfully Logged in');
        this._router.navigate(['/home']);
      } else {
        this.toastr.error('Please register (or) re-check your credentials before proceed!');      
      }
    });
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  navigate(id: string) {
    if (id == 'home') this._router.navigate(['/home']);
    if (id == 'about') this._router.navigate(['/about']);
    if (id == 'signup') this._router.navigate(['/signup']);
    if (id == 'welcome') this._router.navigate(['/welcome']);
  }
  contactUs() {
    this.dialog.open(ContactUsComponent, {});
  }
}
