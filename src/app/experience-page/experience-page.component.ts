import { Component} from '@angular/core';
import { GlobalService } from '../shared/service/global.service';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html'
})
export class ExperiencePageComponent {

  constructor(public globalService: GlobalService) { }

  title = 'Experience';
  imgUrl = '/assets/andrey.jpg';

}
