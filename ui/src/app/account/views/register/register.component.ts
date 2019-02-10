import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor (
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  form: FormGroup;

  ngOnInit () {
    this.createFormGroup();
  }

  createFormGroup (): void {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control('', Validators.email),
      password: this.formBuilder.control('')
    });
  }

  register$ () {
    this.authenticationService.register$(this.form.value).subscribe(() => {
      this.router.navigate(['/account/login']);
    });
  }
}
