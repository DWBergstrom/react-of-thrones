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
      hidden: false
    }
  }

  render () {
    return (
        <div>
          <li className="person-list-item">{this.props.name}</li>
          <div className="">
            <PersonDetail
              description={this.props.description}
            />
          </div>
        </div>
    )
  }

}

export default Person
