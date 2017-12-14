import { Repository } from './../../models/repository.interface';
import { User } from './../../models/user.interface';
import { GithubService } from './../../providers/github-service/github-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  segment: 'profile/result/:username'
})
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {
  repositories: Repository[];
  username: string;
  user: User
  constructor(private gitHubService: GithubService, private navCtrl: NavController, private navParams: NavParams) {
    console.log("ionViewWillEnterConstructor", this.navParams);
  }
  ionViewWillEnter() {
    console.log("ionViewWillEnter", this.navParams);
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserInformation();
    }
  }
  getUserInformation(): void {
    this.gitHubService.getUserInformation(this.username)
      .subscribe(data => {
        console.log("Logging Data", data);
        this.user = data;
      });
    this.gitHubService.getRepositoryInformation(this.username)
      .subscribe(data => {
        console.log("Repo Data", data);
        this.repositories = data;
      });
  }

}
