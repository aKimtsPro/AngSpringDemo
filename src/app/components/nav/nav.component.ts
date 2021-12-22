import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLogged$!: Observable<boolean>;

  constructor(private _sessionService: SessionService) { }

  ngOnInit(): void {
    this.isLogged$ = this._sessionService.isLoggedRequest();
  }

  logout(){
    this._sessionService.logOut();
  }
}
