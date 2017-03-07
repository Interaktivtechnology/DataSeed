import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import HomeTable from './HomeTable'

class Home extends Component {

    //example redirect for next time<button type="button" className="btn btn-default" onClick={() => browserHistory.push('/login')}>Login</button>

    render() {

        return (
            <div>
                <HomeTable />
            </div>
        )
    }
}

export default (Home)