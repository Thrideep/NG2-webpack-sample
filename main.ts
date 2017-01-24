import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModuleRef, Injector,enableProdMode } from '@angular/core';
import { AppInjector } from './shared/injector';
import { AppModule } from './app.module';

// if (process.env.ENV === 'production') {
//   enableProdMode();
// }
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule)
    .then((appRef: NgModuleRef<any>) => {
        AppInjector(appRef.injector);
    }, error => console.log(error));

