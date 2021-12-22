import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    'username': new FormControl(''),
    'password': new FormControl('')
  })

  constructor(private _service: SessionService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._service.login( this.loginForm.value, {
        next: popol => console.log(popol),
        error: error => alert( "username/password invalide" )
      })
  }

}
