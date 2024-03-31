import React, { useContext } from 'react'
import "./ToolsDisplay.css"
import { PhaseContext } from '../../context/PhaseContext';
import { tools_list } from '../../assets/assets';

const ToolsDisplay = ({phase}) => {

const {tools_list} = useContext(PhaseContext)

  return (
    <div className='tools-display' id='tools-display'>
      <h2>Tools</h2>
      <div className="tools-display-list">
        {tools_list.map((item,index)=>{
          return <ToolItem key={index} id={item._id} name={item.name}/>
        })}
      </div>

    </div>
  )
}

export default ToolsDisplay