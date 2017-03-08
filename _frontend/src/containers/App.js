import React, { Component } from 'react'
import { Link } from 'react-router' 

export default class App extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <span className="navbar-brand" href="#">
                                <Link to="/"><img src="./dist/assets/images/logo.png" /></Link>
                            </span>
                        </div>
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/login" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>Login</Link>
                            </li>
                            <li>
                                <Link to="/pricing" activeStyle={{color: '#555', backgroundColor: '#e7e7e7'}}>Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="panel panel-default">
                    <div className="panel-body">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}