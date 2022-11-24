import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FacadeService } from 'src/app/services/facade.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private facadeService: FacadeService, public authService: AuthService ) { }

  ngOnInit(): void {
  }

  signOut() {
    return this.facadeService.signOut()
  }

}
