import { Component} from '@angular/core';
import { GlobalService } from '../shared/service/global.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html'
})
export class AboutPageComponent {

  constructor(public globalService: GlobalService) { }

  title = 'About My';
  imgUrl = '/assets/andrey.jpg';

}
