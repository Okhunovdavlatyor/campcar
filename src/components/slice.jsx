import React from 'react'
import { tuningcar } from '../mockdate/tuningmock'

const SliceComp = () => {
    const bd = tuningcar.maindata.slice(0,6);
    console.log(bd);
    
  return (
    <div style={{display:'flex'}}>
            
    </div>
  )
}

export default SliceComp