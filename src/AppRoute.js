import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import * as RoutePath from '../src/config/routeConfig.js'
import SideBar from './features/app/sidebar.js'
import Dashboard from '../src/features/Dashboard/container/dashContainer.js'
import SignIn from '../src/features/Signin/container/signinContainer.js'

const AppRoute=()=>{
    return(
        <Router>
            
            <Switch>
                <Route path={`/`} exact component={SignIn} />
                <Route path={`/${RoutePath.Dashboard}`} component={Dashboard} />
                {/* <Route path={`/${RoutePath.AdminPanel}`} component={AdminPanel} /> */}
                {/* <Route path={`/${RoutePath.Report}`} component={Report} /> */}
                {/* <Route path={`/${RoutePath.Setting}`} component={Setting} />
                <Route path={`/${RoutePath.SetUp}`} component={SetUp} /> */}
                {/* <Route path={`/${RoutePath.Transactions}`} component={ Transactions} />
                <Route path={`/${RoutePath.ViewTransactions}`} component={ViewTransactions} /> */}
                <Redirect to={`/`} />
            </Switch>
            
        </Router>
     
       
    )
}
export default AppRoute