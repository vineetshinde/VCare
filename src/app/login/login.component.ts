import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, private router:Router) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const {username , password} = form.value;
  
    console.log(username, password);

    this.auth.login(username,password)
      .then(() =>{this.router.navigate(["dashboard"])} )
  }

  
}
