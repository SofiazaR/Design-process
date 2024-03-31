import React, { useState } from 'react'
import './Home.css'
import Phase from '../../components/Phase/Phase'
import ToolsDisplay from '../../components/ToolsDisplay/ToolsDisplay';

const Home = () => {

  const [phase,setPhase] = useState("All");

  return (
    <div>
      <Phase phase={phase} setPhase={setPhase}/>
     
    </div>
  )
}

export default Home