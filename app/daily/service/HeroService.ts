/**
 * Created by china on 2017/2/12.
 */
import {Injectable} from '@angular/core';
import {MyConst} from '../const/myConst';
import {Hero} from "../bean/hero";
@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(MyConst.HEROES || []);
    }
}