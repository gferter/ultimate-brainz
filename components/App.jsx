import React, { Component } from 'react';
import { className } from 'css-classname';
import { NavLink, Route, Switch } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, Grid } from 'react-bootstrap';

import { Album } from './Album';
import { Albums } from './Albums';
import { Search } from './Search';
import { NotFound } from './Bricks';

const classNames = (...args) => className(require('./App.scss'), ...args);


export class AppComponent extends Component {
    render () {
        return (
            <div>
                <Navbar inverse={ true } fixedTop={ true } collapseOnSelect={ true }>
                    <Navbar.Header>
                        <NavLink to={ '/' }>
                            <Navbar.Brand>
                                ultimate-brainz
                            </Navbar.Brand>
                        </NavLink>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to={ '/albums' }>
                                <NavItem eventKey={ 1 }> My Albums</NavItem>
                            </LinkContainer>
                            <LinkContainer to={ '/search' }>
                                <NavItem eventKey={ 2 }>Search</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid componentClass={ 'main' } className={ classNames('content') }>
                    <Switch>
                        <Route path='/' exact={ true } component={ Albums } />
                        <Route path='/album/:id' component={ Album } />
                        <Route path='/albums' component={ Albums } />
                        <Route path='/search' component={ Search } />
                        <Route component={ NotFound } />
                    </Switch>
                </Grid>
                <hr/>
                <Grid componentClass={ 'footer'} >
                    <p>All Rights Reserved. Alexander Larin. 2017 =)</p>
                </Grid>
            </div>
        );
    }
}

export const App = AppComponent;
