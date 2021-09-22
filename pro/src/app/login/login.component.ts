import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={
  uname:'',
  password:''
}
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
loginUser(){
this.authservice.loginUser(this.user)
.subscribe(
  res=>{
    localStorage.setItem('token',res.token)
    this.router.navigate([''])

  }
)
}
}
