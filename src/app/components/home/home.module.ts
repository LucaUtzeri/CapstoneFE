import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { CardDetailComponent } from "../card-detail/card-detail.component";
import { CardViewComponent } from "src/app/views/card-view/card-view.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path: ``,
        component: HomeComponent,
    },
    {
        path: `details/:name`,
        component: CardViewComponent,
    },
];

@NgModule({
    declarations: [CardDetailComponent, HomeComponent],
    imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class HomeModule { }