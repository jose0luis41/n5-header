import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [{ path: "**", component: EmptyRouteComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TranslateModule
  ],
  exports: [RouterModule, TranslateModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule {}
