import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isLogin = false;
  constructor(fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('login')== 'true') {
      this.router.navigate(['dashboard']);
    }
  }

  iniciar() {
    const {email, password} = this.form.value;
    if(email == 'test@test.com' && password=='12345') {
      this.isLogin = false;
      sessionStorage.setItem('login', 'true');
      this.router.navigate(['dashboard']);
    } else {
      this.isLogin = true;
    }
    console.log(this.form.value);
  }

}
