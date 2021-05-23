import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from "./pages/fooldal/fooldal.component";
import { VernyomasrogzitesComponent} from "./pages/vernyomasrogzites/vernyomasrogzites.component";
import { VernyomasmodositasComponent } from "./pages/vernyomasmodositas/vernyomasmodositas.component";
import { RogziteslistazasComponent } from "./pages/rogziteslistazas/rogziteslistazas.component";
import { RogzitestorlesComponent } from "./pages/rogzitestorles/rogzitestorles.component";

const routes: Routes = [
  { path: 'fooldal', component: FooldalComponent },
  { path: 'vernyomasrogzites', component: VernyomasrogzitesComponent },
  { path: 'vernyomasmodositas', component: VernyomasmodositasComponent },
  { path: 'rogziteslistazas', component: RogziteslistazasComponent },
  { path: 'rogzitestorles', component: RogzitestorlesComponent },
  { path:  '', redirectTo:  'fooldal', pathMatch:  'full' },
  { path:  '**', redirectTo:  'fooldal', pathMatch:  'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
