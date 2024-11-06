import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPageComponent } from './input-page/input-page.component';
import { OutputPageComponent } from './output-page/output-page.component';

const appRoutes: Routes = [
  { path: 'input', component: InputPageComponent },
  { path: 'output', component: OutputPageComponent },
  { path: '', redirectTo: '/input', pathMatch: 'full' },
  { path: '**', redirectTo: '/input' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
