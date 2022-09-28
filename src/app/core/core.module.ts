import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

@NgModule({
  declarations: [HeaderComponent, AddTutorialComponent, TutorialDetailsComponent, TutorialsListComponent],
  imports: [RouterModule, CommonModule, HttpClientModule,FormsModule],
  providers: [

  ],

  exports: [HeaderComponent],
})
export class CoreModule {}
