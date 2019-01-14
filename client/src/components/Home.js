import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPerson, changeStatus, getGoingNums, getNotGoingNums } from '../actions/people'
import '../styles/Home.css'

class Home extends Component {
  componentDidMount() {
    getPerson()
    getGoingNums()
    getNotGoingNums()
  }

  goingClick = (e) => {
    e.preventDefault()
    changeStatus(this.props.currentperson.id, "going")
  }

  notgoingClick = (e) => {
    e.preventDefault()
    changeStatus(this.props.currentperson.id, "notgoing")
  }

  componentWillReceiveProps() {
    getGoingNums()
    getNotGoingNums()
  }

  render() {
    const person = this.props.currentperson

    return (
      <div id="personbox">
          <p><Link to="/going">Going:</Link> {this.props.numgoing} <Link to="/notgoing">Not Going:</Link> {this.props.numnotgoing}</p>
          <img src={person.picture} alt={person.id} id="avatar"/>
          <div id="namesContainer">
            {person.fname} {person.lname}
          </div>
          {person.phone} <br />
          {person.email}
          <div id="buttonsContainer">
            <button onClick={this.goingClick} id="checkButton"><i className="fa fa-check"></i></button> <button onClick={this.notgoingClick} id="noButton"><i className="fa fa-times"></i></button>
          </div> 
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    currentperson: appState.peopleReducer.currentperson,
    numgoing: appState.peopleReducer.numgoing,
    numnotgoing: appState.peopleReducer.numnotgoing
  }
}

export default connect(mapStateToProps)(Home)