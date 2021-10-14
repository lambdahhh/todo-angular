import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {
    static categories: Category[] = [
        {id: 1, title: 'Работа'},
        {id: 2, title: 'Семья'},
        {id: 3, title: 'Учеба'},
        {id: 4, title: 'Отдых'},
        {id: 5, title: 'Спорт'},
        {id: 6, title: 'Еда'},
        {id: 7, title: 'Финансы'},
        {id: 8, title: 'Гаджеты'},
        {id: 9, title: 'Здоровье'},
        {id: 10, title: 'Автомобиль'},
    ];

    static priorities: Priority[] = [
        {id: 1, title: 'Низкий', color: '#e5e5e5'},
        {id: 2, title: 'Средний', color: '#85D1B2'},
        {id: 3, title: 'Высокий', color: '#F1828D'},
        {id: 4, title: 'Очень срочно!', color: '#F1128D'},
    ];

    static tasks: Task[] = [
        {
            id: 1,
            title: 'Залить бензин полный бак',
            priority: TestData.priorities[2],
            completed: false,
            category: TestData.categories[1],
            date: new Date('2019-04-10')
        },
        {
            id: 2,
            title: 'Сходить за хлебом',
            priority: TestData.priorities[3],
            completed: true,
            category: TestData.categories[2],
            date: new Date('2019-04-10')
        },
        {
            id: 3,
            title: 'Выпить пива',
            priority: TestData.priorities[4],
            completed: false,
            category: TestData.categories[3],
            date: new Date('2019-04-10')
        },
        {
            id: 4,
            title: 'Нарезать колбасу',
            priority: TestData.priorities[1],
            completed: true,
            category: TestData.categories[1]
        },
        {
            id: 5,
            title: 'Купить машину',
            priority: TestData.priorities[2],
            completed: false,
        },
        {
            id: 6,
            title: 'Сходить на массаж',
            priority: TestData.priorities[3],
            completed: false,
            category: TestData.categories[4],
            date: new Date('2019-04-10')
        },
        {
            id: 7,
            title: 'Сделать доброе дело',
            completed: false,
            category: TestData.categories[3],
            date: new Date('2019-04-10')
        },
    ];
}
