import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'

import Home from './../components/Home/Home'
import History from './../components/History/History'
import history from './history'

export default class routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path='/quanment' exact component={Home}/>
                        <Route path='/quanment/History' exact component={History}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
