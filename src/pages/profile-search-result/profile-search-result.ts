import { GithubService } from './../../providers/github-service/github-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {
  username: string;

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
    this.gitHubService.mockGetUserInformation(this.username)
      .subscribe(data => {
        console.log("Logging Data", data);
      });
  }

}