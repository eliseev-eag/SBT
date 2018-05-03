import { connect } from 'react-redux';
import { EmployeeReadOnlyForm } from '../components/EmployeeReadOnlyForm';

const mapStateToProps = (state, ownProps) => ({
    fields: state.employeeFields,
    selectedEmployee: state.employees.find(p => p.id === ownProps.selectedEmployeeId)
})

export const EmployeeReadOnlyFormContainer = connect(mapStateToProps)(EmployeeReadOnlyForm);