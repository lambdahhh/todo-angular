import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Task} from "../../model/Task";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

    public tasks?: Task[]

    constructor(private dataHandler: DataHandlerService) {
    }

    ngOnInit(): void {
        this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);
    }

    toggleTaskCompleted(task: Task) {
        task.completed = !task.completed;
    }

    sortByTitle(sortField: string) {
        this.dataHandler.fillSortTasks(sortField);
    }

    sortByComplete(sortComplex: string, sortField: string) {
        this.dataHandler.fillComplexSortTasks(sortComplex, sortField);
    }

    getPriorityColor(task: Task): string {
        if (task.completed) {
            return 'green';
        }
        if (task.priority && task.priority.color) {
            return task.priority.color;
        }

        return 'white';
    }

}
