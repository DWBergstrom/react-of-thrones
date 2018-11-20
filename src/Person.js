import React from 'react'
import PersonDetail from './PersonDetail.js'

const Person = ({name, description}) => (

  <div>
    <li className="person-list-item">{name}</li>
    <div>
      <PersonDetail
        description={description}
      />
    </div>
  </div>

)

export default Person
