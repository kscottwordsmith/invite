import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getGoing } from '../actions/people'
import '../styles/Going.css'

class Going extends Component {
    componentDidMount() {
        getGoing()
    }

    render() {
        let displayGoing = this.props.going.map((person, i) => (
            <div key={"going" + person.id} className="goingContainer">
                <img src={person.picture} alt={person.id} className="avatar"/>
                <div className="name">{person.fname} {person.lname}</div>
                {person.email} <br />
                {person.phone}
                <p id="goingBack"><Link to="/"><i className="fa fa-chevron-left"></i></Link></p>
            </div>
        ))
        return (
           <Fragment>
               <div id="goingOverall">
                    {displayGoing}
                </div>
           </Fragment>
        )
    }
}

function mapStateToProps(appState) {
    return {
      going: appState.goingReducer.going
    }
  }

export default connect(mapStateToProps)(Going)