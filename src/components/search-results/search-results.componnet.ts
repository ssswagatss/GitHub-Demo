import { User } from './../../models/user.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'search-results',
  templateUrl: 'search-results.html'
})
export class SearchResultsComponent {
  @Input('user') user: User;
}
