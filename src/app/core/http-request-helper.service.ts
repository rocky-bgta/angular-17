import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestHelperService {

  constructor(private httpClient: HttpClient) {
  }

  private httpHeaderOptions: object = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    })
  };

  public postRequest(requestUrl: string, requestPayload: any): Observable<any> {
    let response = this.httpClient.post<any>
    (
      requestUrl,
      requestPayload,
      this.httpHeaderOptions
    );
    return response;
  }
}
