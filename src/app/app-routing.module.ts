import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {HistoryComponent} from "./components/history/history.component";
import {AuthGuard} from "./auth.guard";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "history",
    component: HistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "text-similarity",
    component: TextSimilarityComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
