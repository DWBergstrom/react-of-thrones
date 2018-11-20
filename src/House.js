import React, { Component } from 'react';
import Person from './Person.js'

class House extends Component {

  constructor (props) {
    super(props)

    this.state = {
      liked: false,
      collapsed: false
    }

    // This syntax ensures `this` is bound within toggleLiked
    this.toggleLiked = this.toggleLiked.bind(this)
    this.toggleCollapsed = this.toggleCollapsed.bind(this)
  }

  toggleLiked() {
    this.setState({
      liked: !this.state.liked
    })
  }

  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    return (
      <div className={`house-name ${this.state.liked ? 'liked' : ''}`}>
        <h3 className={`individual-house ${this.state.collapsed ? 'collapsed' : ''}`}>{this.props.name}</h3>
        <p className={this.state.collapsed ? 'collapsed' : ''}>Click a house member's name for details</p>
        <ul className={`${this.state.collapsed ? 'collapsed' : ''}`}>
        {this.props.people.map(person => (
          <Person
            key={person.name}
            name={person.name}
            description={person.description}
          />
        ))}
        </ul>
        <button className="like-button" onClick={this.toggleLiked}>{this.state.liked ? 'Unlike' : 'Like'}</button>
        <button className="collapse-button" onClick={this.toggleCollapsed}>{this.state.collapsed ? 'Show' : 'Collapse'}</button>
      </div>
    )
  }
}



export default House
