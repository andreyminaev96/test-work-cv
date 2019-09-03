import { Component} from '@angular/core';
import { GlobalService } from '../shared/service/global.service';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html'
})
export class SkillsPageComponent {
  constructor(public globalService: GlobalService ) {}
  title = 'Skills';
}
