import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getNotGoing } from '../actions/people'
import '../styles/NotGoing.css'

class NotGoing extends Component {
    componentDidMount() {
        getNotGoing()
    }

    render() {
        let displayNotGoing = this.props.notgoing.map((person, i) => (
            <div key={"going" + person.id} className="notgoingContainer">
                <img src={person.picture} alt={person.id} className="avatar"/>
                <div className="name">{person.fname} {person.lname}</div>
                {person.email} <br />
                {person.phone}
            </div>
        ))
        return (
           <Fragment>
               <div id="notgoingOverall">
                    {displayNotGoing}
                </div>
           </Fragment>
        )
    }
}

function mapStateToProps(appState) {
    return {
      notgoing: appState.goingReducer.notgoing
    }
  }

export default connect(mapStateToProps)(NotGoing)