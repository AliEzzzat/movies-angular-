import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthSernise:AuthService,private _Router:Router) { }
  error:string = ''
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]), 
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z]{2,5}$/)]), 
  });
  submitLogin(formInfo:FormGroup){
    this._AuthSernise.login(formInfo.value).subscribe((response)=>{
      if(response.message == 'success'){
        localStorage.setItem('userToken',JSON.stringify( response.token));
        this._Router.navigate(['/home']);
        this._AuthSernise.setUserData();

      }else{
        this.error = 'Email or password worning';
      }
    })
  }

  ngOnInit(): void {
  }

}
