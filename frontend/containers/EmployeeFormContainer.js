import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { EmployeeForm } from '../components/EmployeeForm';

const mapDispatchToProps = dispatch => ({
    save: (item) => dispatch(actions.push("employees", item))
})

export const EmployeeFormContainer = connect(undefined, mapDispatchToProps)(EmployeeForm);