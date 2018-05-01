import { connect } from 'react-redux';
import { Table } from '../components/Table';

const mapStateToProps = state => ({
    employeeFields: state.employeeFields,
    employees: state.employees
})

export const TableContainer = connect(mapStateToProps)(Table);