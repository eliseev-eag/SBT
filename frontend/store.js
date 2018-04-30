import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';

const initialSettingsState = {
    surname: true,
    firstName: true,
    lastName: false,
    birthday: false
}

const store = createStore(combineForms({
    settings: initialSettingsState
}));

export default store;