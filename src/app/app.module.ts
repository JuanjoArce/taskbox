
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

 import { TaskModule } from './components/task.module';
 import { NgxsModule } from '@ngxs/store';
 import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
 import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

 import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PureTaskListComponent } from './components/pure-task-list.component';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task.component';

@NgModule({
  declarations: [AppComponent, PureTaskListComponent, TaskComponent],
  imports: [
    BrowserModule,
   TaskModule,
   CommonModule,
    NgxsModule.forRoot([], {
     developmentMode: !environment.production,
   }),
   NgxsReduxDevtoolsPluginModule.forRoot(),
   NgxsLoggerPluginModule.forRoot({
     disabled: environment.production,
   }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}