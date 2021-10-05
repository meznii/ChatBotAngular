import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AddResponsService} from '../../services/bd/add-respons.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin = true;
  errorMessage = '';
  constructor(private router: Router,
              private addresponse: AddResponsService) { }

  ngOnInit(): void {
  }
  login(loginForm: NgForm) {
    this.addresponse.login(loginForm.value).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/chatBot']);
      },
      (error) => {
        console.log(error.error.error);
        this.errorMessage = error.error.error;
      }
    );
  }
}
