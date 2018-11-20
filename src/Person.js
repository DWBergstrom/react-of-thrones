import React, { Component } from 'react';
import PersonDetail from './PersonDetail.js'

// const Person = ({name, description}) => (
//   <div>
//     <li className="person-list-item">{name}</li>
//     <div className="">
//       <PersonDetail
//         description={description}
//       />
//     </div>
//   </div>
// )

class Person extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hidden: true
    }

    this.toggleHidden = this.toggleHidden.bind(this)
  }

  toggleHidden() {
    this.setState({
      hidden: !this.state.hidden
    })
  }


  render () {
    return (
        <div>
          <li onClick={this.toggleHidden} className="person-list-item">{this.props.name}</li>
          <div className={this.state.hidden ? 'hidden' : ''}>
            <PersonDetail
              description={this.props.description}
            />
          </div>
        </div>
    )
  }

}

export default Person
