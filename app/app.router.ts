/**
 * Created by Administrator on 2017/3/29.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from "./daily/component/components/signUp.component";
import {LoginComponent} from "./daily/component/components/login.component";
const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'signIn',redirectTo:''},
    {path: 'signUp', component: SignUpComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule {
}