import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})


export class MenuComponent {
  constructor(private router: Router , public globalService: GlobalService) {
  }

  setRoute(link: string) {
    this.router.navigate([link]);
  }


}
