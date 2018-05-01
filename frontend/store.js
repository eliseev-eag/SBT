import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';

const initialEmployeeFieldsState = {
    surname: { fieldName: "Фамилия", visible: true },
    firstName: { fieldName: "Имя", visible: true },
    lastName: { fieldName: "Отчество", visible: false },
    birthday: { fieldName: "Дата рождения", visible: false },
}

const initialEmployeesState = [
    {
        surname: "Иванов",
        firstName: "Иван",
        lastName: "Иванович",
        birthday: "17.03.1995"
    }
]

const store = createStore(combineForms({
    employeeFields: initialEmployeeFieldsState,
    employees: initialEmployeesState
}));

export default store;