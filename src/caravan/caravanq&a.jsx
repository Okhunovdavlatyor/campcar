import React from 'react'
import { Displaywrapper, Flexwraper, Flexwrapper } from '../styles/qa'

const CaravanQandAcomponent = () => {
  return (
    <Displaywrapper>
        <Flexwrapper>
            <p>Name</p>
            <h1>Question Lorem ipsum dolor sit amet ?</h1>
            <p>Name</p>
            <h1>Question Lorem ipsum dolor sit amet ?</h1>
            <p>Name</p>
            <h1>Question Lorem ipsum dolor sit amet ?</h1>
            <p>Name</p>
            <h1>Question Lorem ipsum dolor sit amet ?</h1>
        </Flexwrapper>
        <Flexwraper>
            <h1>Send question</h1>
            <input type="text" placeholder='Your name' />
            <input type="text" placeholder='Your email' />
            <input type="text" placeholder='Your question' style={{height:'120px'}} />
            <button>Send question</button>
        </Flexwraper>
    </Displaywrapper>
  )
}

export default CaravanQandAcomponent