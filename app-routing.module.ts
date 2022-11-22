import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'welcome',
    pathMatch: "full",
  },
  {
    path: "welcome",
    component: WelcomeComponent,
    pathMatch: "full",
  },
  {
    path: "question",
    component: QuestionComponent,
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
