import * as React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <Nav bsStyle="pills">
                <NavItem
                    componentClass={Link}
                    href="/list"
                    to="/list"
                    active={location.pathname === '/list'}>
                    Список сотрудников
                </NavItem>
                <NavItem
                    componentClass={Link}
                    href="/add"
                    to="/add"
                    active={location.pathname === '/add'}>
                    Добавить запись
                </NavItem>
                <NavItem
                    componentClass={Link}
                    href="/settings"
                    to="/settings"
                    active={location.pathname === '/settings'}>
                    Настройки
                </NavItem>
            </Nav>
        )
    }
}
