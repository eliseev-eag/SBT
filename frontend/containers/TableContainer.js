import { connect } from 'react-redux';
import { Table } from '../components/Table';

const mapStateToProps = state => ({
    settings: state.settings
})

export const TableContainer = connect(mapStateToProps)(Table);