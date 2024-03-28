import React from 'react'
import './ToolItem.css'

const ToolItem = ({id,name,category}) => {
  return (
    <div className='tool-item'>
        <div className="tool-item-container">
            <p>{name}</p>
        </div>
    </div>
  )
}

export default ToolItem