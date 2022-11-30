import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFacadeService } from 'src/app/services/auth.facade.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authFacadeService: AuthFacadeService, public authService: AuthService ) { }

  ngOnInit(): void {
  }

  signOut() {
    return this.authFacadeService.signOut()
  }

}
