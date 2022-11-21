import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { APIService } from 'src/app/services/api.service';
import { SignUp } from 'src/app/models/student-data';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),

  });
  submitted = false;
  title = 'Search Online Supervisor';
  mail: string = "";
  username: string = "";
  password: string = "";
  signup: SignUp[] = [];
  constructor(private toastr: ToastrService,
    private api_service: APIService,
    private _router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@wilp.bits-pilani.ac.in$')]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ]
        ],

      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const payload = {
      email: this.form.controls['email'].value,
      name: this.form.controls['username'].value,
      password: this.form.controls['password'].value
    }
    this.api_service.sign_up(payload).subscribe(res => {
      if (res) {
        this.toastr.success('Successfully registered and logged in');
        this._router.navigate(['/home']);
      } else {
        this.toastr.error('You are already registered! Please login');
      }
    });
    // wilp.bits-pilani.ac.in

  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  navigate(id: string) {
    if (id == 'home') this._router.navigate(['/home']);
    if (id == 'about') this._router.navigate(['/about']);
    if (id == 'signin') this._router.navigate(['/signin']);
    if (id == 'welcome') this._router.navigate(['/welcome']);
  }
}
