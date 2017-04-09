/**
 * Created by china on 2017/2/12.
 */
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
