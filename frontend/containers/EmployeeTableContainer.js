import { connect } from 'react-redux';
import { EmployeeTable } from '../components/EmployeeTable';

const mapStateToProps = state => ({
    employeeFields: state.employeeFields,
    employees: state.employees
})

export const EmployeeTableContainer = connect(mapStateToProps)(EmployeeTable);