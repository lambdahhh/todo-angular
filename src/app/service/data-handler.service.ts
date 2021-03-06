import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {TestData} from "../data/TestData";
import {Task} from "../model/Task";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataHandlerService {

    tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
    categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

    constructor() {
        this.fillTasks();
        this.fillCategories();
    }

    fillCategories() {
        this.categoriesSubject.next(TestData.categories);
    }

    // getCategories(): Category[] {
    //     return TestData.categories;
    // }

    fillTasks() {
        this.tasksSubject.next(TestData.tasks);
        // return TestData.tasks;
    }

    fillSortTasks(sortField: string) {
        const tasks = TestData.tasks.sort(function (a, b) {
            // @ts-ignore
            if (a[sortField] > b[sortField]) {
                return 1;
            } else { // @ts-ignore
                if (a[sortField] < b[sortField]) {
                                return -1;
                            }
            }
            return 0;
        });

        this.tasksSubject.next(tasks);
    }

    fillComplexSortTasks(sortComplex: any, sortField: string) {
        const tasks = TestData.tasks.sort(function (a, b) {
            // @ts-ignore
            if (a[sortComplex] !== undefined && b[sortComplex] !== undefined && a[sortComplex][sortField] > b[sortComplex][sortField]) {
                return 1;
            } else {
                // @ts-ignore
                if (a[sortComplex] !== undefined && b[sortComplex] !== undefined && a[sortComplex][sortField] < b[sortComplex][sortField]) {
                    return -1;
                }
            }
            return 0;
        });

        this.tasksSubject.next(tasks);
    }

    fillTasksByCategory(category: Category) {
        const tasks = TestData.tasks.filter(task => task.category === category);
        this.tasksSubject.next(tasks);
        // return TestData.tasks.filter(task => task.category === category);
    }

}
