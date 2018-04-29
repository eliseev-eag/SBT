import * as React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        SBT
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
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
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
