import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {TokenServiceService} from "../../services/token-service.service";
import {response} from "express";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  name:string = 'azuer';

  constructor(private tokenService : TokenServiceService) { }

  username:string = "";
  password:string = "";

  public onClick(){
    let credential = {
      username: this.username,
      password: this.password
    }

    this.tokenService.getAccessToken(credential).subscribe(
      response=>{
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
