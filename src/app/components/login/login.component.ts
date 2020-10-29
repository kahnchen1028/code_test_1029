import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { AuthorizationService } from 'src/app/@code/auth/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  destroy = new Subscription()
  loginForm: FormGroup;
  domainFormControl = new FormControl('', [Validators.required]);
  accountFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  error:string;
  loginFail:boolean;
  constructor(
    private fb:FormBuilder,
    private loginService:AuthorizationService,
    private route: Router
    ) { 
    this.loginForm = this.fb.group({
      domain:this.domainFormControl,
      email: this.accountFormControl,
      password: this.passwordFormControl
  });
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    
  }

  ngOnDestory() {
    this.destroy.unsubscribe();
  }

  login(){
    this.loginFail=false;
    this.destroy = this.loginService.Login(this.loginForm.value).subscribe((res)=>{
      if(res.status==200){
        this.route.navigate([ 'suceess' ]);
      }
      else{
        this.loginFail=true;
        
      }
    })
  }

}
