import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { CardDetailComponent } from "../card-detail/card-detail.component";
const routes: Routes = [
    {
        path: ``,
        component: HomeComponent,
    },
    {
        path: `card`,
        component: CardDetailComponent,
    },
];

@NgModule({
    declarations: [CardDetailComponent],
    imports: [CommonModule, RouterModule, RouterModule.forChild(routes)],
})
export class HomeModule { }