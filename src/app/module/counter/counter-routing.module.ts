import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountComponent } from '../../comp/counter/count/count.component';

const routes: Routes = [{
  path: '',
  component: CountComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
