import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, Home, Login, Pricing } from './containers' 

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="index" component={Home}/>
        <Route path="login" component={Login}/>
        <Route path="pricing" component={Pricing}/>
    </Route>
)