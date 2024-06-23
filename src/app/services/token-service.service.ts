import { Injectable } from '@angular/core';
import {HttpRequestHelperService} from "../core/http-request-helper.service";
import {Observable} from "rxjs";
import {ApiEndPoint} from "../api-end-point";

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor(private httpRequestHelperService: HttpRequestHelperService) { }

  getAccessToken(data:any): Observable<any> {
    return this.httpRequestHelperService.postRequest(ApiEndPoint.accessToken, data);
  }
}
