import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import uuid from 'uuid/v4';
import { EmployeeForm } from '../components/EmployeeForm';

const mapStateToProps = state => ({
    fields: state.employeeFields,
    divisionValues: state.divisions,
    positionValues: state.positions
})

const mapDispatchToProps = dispatch => ({
    save: (item) => {
        dispatch(actions.push("employees", { ...item, id: uuid() }));
    }
})

export const EmployeeFormContainer = connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);