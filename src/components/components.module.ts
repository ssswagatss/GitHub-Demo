import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results.componnet';
import { IonicModule } from 'ionic-angular';
import { RepositoriesComponent } from './repositories/repositories.component';
@NgModule({
	declarations: [SearchResultsComponent,
		RepositoriesComponent],
	imports: [IonicModule],
	exports: [SearchResultsComponent,
		RepositoriesComponent]
})
export class ComponentsModule { }
