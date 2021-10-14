import {Component} from '@angular/core';
import {interval, Subscription, Observable, Subject} from 'rxjs';
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
}
