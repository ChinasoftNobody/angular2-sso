/**
 * Created by Administrator on 2017/3/29.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from "./daily/component/components/signUp.component";
import {MainComponent} from "./daily/component/components/main.component";
const routes: Routes = [
    {path:'',component:MainComponent},
    {path: 'signUp', component: SignUpComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {
}