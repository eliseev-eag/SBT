import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineForms } from 'react-redux-form';

const initialEmployeeFieldsState = {
    surname: { fieldName: "Фамилия", visible: true },
    firstName: { fieldName: "Имя", visible: true },
    lastName: { fieldName: "Отчество", visible: false },
    birthday: { fieldName: "Дата рождения", visible: false },
    division: { fieldName: "Подразделение", visible: false },
    position: { fieldName: "Должность", visible: false },
    personalNumber: { fieldName: "Табельный номер", visible: false }
}

const initialEmployeesState = [
    {
        surname: "Иванов",
        firstName: "Иван",
        lastName: "Иванович",
        birthday: "17.03.1995",
        position: "менеджер",
        division: "IT",
        personalNumber: 777
    }
]

const initialDivisionsState = [
    "Бухгалтерия",
    "IT"
]

const initialPositionState = [
    "менеджер",
    "руководитель"
]

const store = createStore(combineForms({
    employeeFields: initialEmployeeFieldsState,
    employees: initialEmployeesState,
    divisions: initialDivisionsState,
    positions: initialPositionState
}), applyMiddleware(thunk));

export default store;