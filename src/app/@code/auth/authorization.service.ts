import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import {CredentialsBody} from 'src/app/models/auth.model'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private httpClient:HttpClient) { }

  Login(credentials:CredentialsBody):Observable<HttpResponse<any>>{
    let headers =  new HttpHeaders();
    headers = headers.set('X-TCLOUD-SERVICE', 'dm');

    return this.httpClient.post(`${environment.apiUrl}/v3/auth/sign_in`,credentials,{headers});

  }
  Logout(){
    console.log("logout")
  }

}
