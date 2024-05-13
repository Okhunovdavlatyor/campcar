import React from 'react'
import { Displaywrapper, Flexwrapper } from '../styles/faq'

import { Flexwraper } from '../styles/qa'
import AccordionTransition from '../components/accordion'

const CaravanFaq = () => {
  return (
    
    <Displaywrapper>
        <Flexwrapper>
            <AccordionTransition />
        </Flexwrapper>
        
        <Flexwraper >
            <h1 style={{textAlign: 'center'}}>Have you got a question</h1>
            <input type="text" placeholder='Your name' />
            <input type="text" placeholder='Your email' />
            <input type="text" placeholder='Your question' style={{height:'120px'}} />
            <button>Send question</button>
        </Flexwraper>
        
    </Displaywrapper>
  )
}

export default CaravanFaq