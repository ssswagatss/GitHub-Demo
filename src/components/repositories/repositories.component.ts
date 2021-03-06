import { Repository } from './../../models/repository.interface';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'repositories',
  templateUrl: 'repositories.html'
})
export class RepositoriesComponent {
  @Input('repository') repository: Repository;
}
