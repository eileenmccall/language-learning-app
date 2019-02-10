import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  form: FormGroup;

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup(): void {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control('', Validators.email),
      password: this.formBuilder.control('')
    });
  }

  login() {
    this.authenticationService.login$(this.form.value).subscribe((result) => {
      console.log(result);
    });
  }

  toRegister() {
    this.router.navigate(['/account/register']);
  }
}
